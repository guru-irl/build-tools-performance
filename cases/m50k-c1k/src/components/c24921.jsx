import React from 'react';
const LABEL_24921 = 'component_24921';
export function Component24921({ value = 24921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24921, 'data-value': derived.doubled }, children);
}
export default Component24921;
