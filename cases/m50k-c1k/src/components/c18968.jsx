import React from 'react';
const LABEL_18968 = 'component_18968';
export function Component18968({ value = 18968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18968, 'data-value': derived.doubled }, children);
}
export default Component18968;
