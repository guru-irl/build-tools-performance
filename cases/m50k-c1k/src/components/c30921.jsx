import React from 'react';
const LABEL_30921 = 'component_30921';
export function Component30921({ value = 30921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30921, 'data-value': derived.doubled }, children);
}
export default Component30921;
