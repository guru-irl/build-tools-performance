import React from 'react';
const LABEL_20227 = 'component_20227';
export function Component20227({ value = 20227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20227, 'data-value': derived.doubled }, children);
}
export default Component20227;
