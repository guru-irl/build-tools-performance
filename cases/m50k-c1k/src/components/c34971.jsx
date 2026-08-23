import React from 'react';
const LABEL_34971 = 'component_34971';
export function Component34971({ value = 34971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34971, 'data-value': derived.doubled }, children);
}
export default Component34971;
