import React from 'react';
const LABEL_44629 = 'component_44629';
export function Component44629({ value = 44629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44629, 'data-value': derived.doubled }, children);
}
export default Component44629;
