import React from 'react';
const LABEL_24186 = 'component_24186';
export function Component24186({ value = 24186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24186, 'data-value': derived.doubled }, children);
}
export default Component24186;
