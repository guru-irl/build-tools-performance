import React from 'react';
const LABEL_11286 = 'component_11286';
export function Component11286({ value = 11286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11286, 'data-value': derived.doubled }, children);
}
export default Component11286;
