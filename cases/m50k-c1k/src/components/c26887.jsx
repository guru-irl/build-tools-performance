import React from 'react';
const LABEL_26887 = 'component_26887';
export function Component26887({ value = 26887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26887, 'data-value': derived.doubled }, children);
}
export default Component26887;
