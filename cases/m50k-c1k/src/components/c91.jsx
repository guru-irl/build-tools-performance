import React from 'react';
const LABEL_91 = 'component_91';
export function Component91({ value = 91, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_91, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_91, 'data-value': derived.doubled }, children);
}
export default Component91;
