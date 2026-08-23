import React from 'react';
const LABEL_25938 = 'component_25938';
export function Component25938({ value = 25938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25938, 'data-value': derived.doubled }, children);
}
export default Component25938;
