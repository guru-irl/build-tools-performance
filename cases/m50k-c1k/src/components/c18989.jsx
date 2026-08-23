import React from 'react';
const LABEL_18989 = 'component_18989';
export function Component18989({ value = 18989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18989, 'data-value': derived.doubled }, children);
}
export default Component18989;
