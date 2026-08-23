import React from 'react';
const LABEL_36103 = 'component_36103';
export function Component36103({ value = 36103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36103, 'data-value': derived.doubled }, children);
}
export default Component36103;
