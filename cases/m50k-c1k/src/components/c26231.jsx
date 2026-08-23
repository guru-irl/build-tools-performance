import React from 'react';
const LABEL_26231 = 'component_26231';
export function Component26231({ value = 26231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26231, 'data-value': derived.doubled }, children);
}
export default Component26231;
