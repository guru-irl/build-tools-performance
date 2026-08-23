import React from 'react';
const LABEL_15887 = 'component_15887';
export function Component15887({ value = 15887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15887, 'data-value': derived.doubled }, children);
}
export default Component15887;
