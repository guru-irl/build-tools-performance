import React from 'react';
const LABEL_38797 = 'component_38797';
export function Component38797({ value = 38797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38797, 'data-value': derived.doubled }, children);
}
export default Component38797;
