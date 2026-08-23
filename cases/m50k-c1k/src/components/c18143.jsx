import React from 'react';
const LABEL_18143 = 'component_18143';
export function Component18143({ value = 18143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18143, 'data-value': derived.doubled }, children);
}
export default Component18143;
