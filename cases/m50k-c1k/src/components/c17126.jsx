import React from 'react';
const LABEL_17126 = 'component_17126';
export function Component17126({ value = 17126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17126, 'data-value': derived.doubled }, children);
}
export default Component17126;
