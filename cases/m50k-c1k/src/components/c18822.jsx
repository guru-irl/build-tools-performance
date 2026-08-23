import React from 'react';
const LABEL_18822 = 'component_18822';
export function Component18822({ value = 18822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18822, 'data-value': derived.doubled }, children);
}
export default Component18822;
