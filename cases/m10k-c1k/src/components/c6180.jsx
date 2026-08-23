import React from 'react';
const LABEL_6180 = 'component_6180';
export function Component6180({ value = 6180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6180, 'data-value': derived.doubled }, children);
}
export default Component6180;
