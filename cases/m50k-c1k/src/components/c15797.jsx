import React from 'react';
const LABEL_15797 = 'component_15797';
export function Component15797({ value = 15797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15797, 'data-value': derived.doubled }, children);
}
export default Component15797;
