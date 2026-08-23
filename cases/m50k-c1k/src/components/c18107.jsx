import React from 'react';
const LABEL_18107 = 'component_18107';
export function Component18107({ value = 18107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18107, 'data-value': derived.doubled }, children);
}
export default Component18107;
