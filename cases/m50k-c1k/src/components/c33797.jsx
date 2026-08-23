import React from 'react';
const LABEL_33797 = 'component_33797';
export function Component33797({ value = 33797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33797, 'data-value': derived.doubled }, children);
}
export default Component33797;
