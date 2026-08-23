import React from 'react';
const LABEL_18842 = 'component_18842';
export function Component18842({ value = 18842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18842, 'data-value': derived.doubled }, children);
}
export default Component18842;
