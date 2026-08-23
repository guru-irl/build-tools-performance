import React from 'react';
const LABEL_37502 = 'component_37502';
export function Component37502({ value = 37502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37502, 'data-value': derived.doubled }, children);
}
export default Component37502;
