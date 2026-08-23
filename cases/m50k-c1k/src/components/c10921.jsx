import React from 'react';
const LABEL_10921 = 'component_10921';
export function Component10921({ value = 10921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10921, 'data-value': derived.doubled }, children);
}
export default Component10921;
