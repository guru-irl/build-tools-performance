import React from 'react';
const LABEL_39797 = 'component_39797';
export function Component39797({ value = 39797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39797, 'data-value': derived.doubled }, children);
}
export default Component39797;
