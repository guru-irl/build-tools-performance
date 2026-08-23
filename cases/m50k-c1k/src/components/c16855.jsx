import React from 'react';
const LABEL_16855 = 'component_16855';
export function Component16855({ value = 16855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16855, 'data-value': derived.doubled }, children);
}
export default Component16855;
