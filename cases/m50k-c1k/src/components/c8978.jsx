import React from 'react';
const LABEL_8978 = 'component_8978';
export function Component8978({ value = 8978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8978, 'data-value': derived.doubled }, children);
}
export default Component8978;
