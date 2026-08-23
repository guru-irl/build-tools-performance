import React from 'react';
const LABEL_18261 = 'component_18261';
export function Component18261({ value = 18261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18261, 'data-value': derived.doubled }, children);
}
export default Component18261;
