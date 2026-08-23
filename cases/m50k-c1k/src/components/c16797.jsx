import React from 'react';
const LABEL_16797 = 'component_16797';
export function Component16797({ value = 16797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16797, 'data-value': derived.doubled }, children);
}
export default Component16797;
