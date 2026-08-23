import React from 'react';
const LABEL_18038 = 'component_18038';
export function Component18038({ value = 18038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18038, 'data-value': derived.doubled }, children);
}
export default Component18038;
