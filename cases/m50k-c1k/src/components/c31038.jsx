import React from 'react';
const LABEL_31038 = 'component_31038';
export function Component31038({ value = 31038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31038, 'data-value': derived.doubled }, children);
}
export default Component31038;
