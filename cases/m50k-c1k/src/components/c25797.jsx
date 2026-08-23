import React from 'react';
const LABEL_25797 = 'component_25797';
export function Component25797({ value = 25797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25797, 'data-value': derived.doubled }, children);
}
export default Component25797;
