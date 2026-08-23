import React from 'react';
const LABEL_18318 = 'component_18318';
export function Component18318({ value = 18318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18318, 'data-value': derived.doubled }, children);
}
export default Component18318;
