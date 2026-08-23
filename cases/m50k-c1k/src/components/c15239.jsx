import React from 'react';
const LABEL_15239 = 'component_15239';
export function Component15239({ value = 15239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15239, 'data-value': derived.doubled }, children);
}
export default Component15239;
