import React from 'react';
const LABEL_6968 = 'component_6968';
export function Component6968({ value = 6968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6968, 'data-value': derived.doubled }, children);
}
export default Component6968;
