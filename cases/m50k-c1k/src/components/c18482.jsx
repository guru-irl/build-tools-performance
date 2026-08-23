import React from 'react';
const LABEL_18482 = 'component_18482';
export function Component18482({ value = 18482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18482, 'data-value': derived.doubled }, children);
}
export default Component18482;
