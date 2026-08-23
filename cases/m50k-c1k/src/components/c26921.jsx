import React from 'react';
const LABEL_26921 = 'component_26921';
export function Component26921({ value = 26921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26921, 'data-value': derived.doubled }, children);
}
export default Component26921;
