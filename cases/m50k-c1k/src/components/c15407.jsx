import React from 'react';
const LABEL_15407 = 'component_15407';
export function Component15407({ value = 15407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15407, 'data-value': derived.doubled }, children);
}
export default Component15407;
