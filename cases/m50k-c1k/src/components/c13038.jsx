import React from 'react';
const LABEL_13038 = 'component_13038';
export function Component13038({ value = 13038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13038, 'data-value': derived.doubled }, children);
}
export default Component13038;
