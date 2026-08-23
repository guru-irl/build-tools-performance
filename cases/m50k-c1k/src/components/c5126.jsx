import React from 'react';
const LABEL_5126 = 'component_5126';
export function Component5126({ value = 5126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5126, 'data-value': derived.doubled }, children);
}
export default Component5126;
