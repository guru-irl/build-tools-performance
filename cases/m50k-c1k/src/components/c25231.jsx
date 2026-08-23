import React from 'react';
const LABEL_25231 = 'component_25231';
export function Component25231({ value = 25231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25231, 'data-value': derived.doubled }, children);
}
export default Component25231;
