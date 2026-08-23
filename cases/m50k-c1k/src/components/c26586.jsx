import React from 'react';
const LABEL_26586 = 'component_26586';
export function Component26586({ value = 26586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26586, 'data-value': derived.doubled }, children);
}
export default Component26586;
