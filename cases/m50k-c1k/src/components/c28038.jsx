import React from 'react';
const LABEL_28038 = 'component_28038';
export function Component28038({ value = 28038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28038, 'data-value': derived.doubled }, children);
}
export default Component28038;
