import React from 'react';
const LABEL_410 = 'component_410';
export function Component410({ value = 410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_410, 'data-value': derived.doubled }, children);
}
export default Component410;
