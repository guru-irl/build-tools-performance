import React from 'react';
const LABEL_40502 = 'component_40502';
export function Component40502({ value = 40502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40502, 'data-value': derived.doubled }, children);
}
export default Component40502;
