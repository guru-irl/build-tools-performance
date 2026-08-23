import React from 'react';
const LABEL_10935 = 'component_10935';
export function Component10935({ value = 10935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10935, 'data-value': derived.doubled }, children);
}
export default Component10935;
