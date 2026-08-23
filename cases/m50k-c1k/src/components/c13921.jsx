import React from 'react';
const LABEL_13921 = 'component_13921';
export function Component13921({ value = 13921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13921, 'data-value': derived.doubled }, children);
}
export default Component13921;
