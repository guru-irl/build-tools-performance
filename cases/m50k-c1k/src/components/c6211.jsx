import React from 'react';
const LABEL_6211 = 'component_6211';
export function Component6211({ value = 6211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6211, 'data-value': derived.doubled }, children);
}
export default Component6211;
