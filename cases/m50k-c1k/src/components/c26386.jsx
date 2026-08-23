import React from 'react';
const LABEL_26386 = 'component_26386';
export function Component26386({ value = 26386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26386, 'data-value': derived.doubled }, children);
}
export default Component26386;
