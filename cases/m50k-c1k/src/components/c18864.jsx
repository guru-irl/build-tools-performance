import React from 'react';
const LABEL_18864 = 'component_18864';
export function Component18864({ value = 18864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18864, 'data-value': derived.doubled }, children);
}
export default Component18864;
