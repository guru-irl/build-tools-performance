import React from 'react';
const LABEL_15438 = 'component_15438';
export function Component15438({ value = 15438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15438, 'data-value': derived.doubled }, children);
}
export default Component15438;
