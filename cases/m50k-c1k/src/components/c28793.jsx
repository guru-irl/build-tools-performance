import React from 'react';
const LABEL_28793 = 'component_28793';
export function Component28793({ value = 28793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28793, 'data-value': derived.doubled }, children);
}
export default Component28793;
