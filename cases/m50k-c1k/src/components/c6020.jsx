import React from 'react';
const LABEL_6020 = 'component_6020';
export function Component6020({ value = 6020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6020, 'data-value': derived.doubled }, children);
}
export default Component6020;
