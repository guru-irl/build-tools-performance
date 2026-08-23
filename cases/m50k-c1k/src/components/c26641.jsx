import React from 'react';
const LABEL_26641 = 'component_26641';
export function Component26641({ value = 26641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26641, 'data-value': derived.doubled }, children);
}
export default Component26641;
