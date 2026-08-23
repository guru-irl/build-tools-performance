import React from 'react';
const LABEL_18737 = 'component_18737';
export function Component18737({ value = 18737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18737, 'data-value': derived.doubled }, children);
}
export default Component18737;
