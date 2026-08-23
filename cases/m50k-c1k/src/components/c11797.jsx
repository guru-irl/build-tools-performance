import React from 'react';
const LABEL_11797 = 'component_11797';
export function Component11797({ value = 11797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11797, 'data-value': derived.doubled }, children);
}
export default Component11797;
