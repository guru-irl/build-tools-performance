import React from 'react';
const LABEL_18204 = 'component_18204';
export function Component18204({ value = 18204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18204, 'data-value': derived.doubled }, children);
}
export default Component18204;
