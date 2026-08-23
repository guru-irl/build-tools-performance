import React from 'react';
const LABEL_36126 = 'component_36126';
export function Component36126({ value = 36126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36126, 'data-value': derived.doubled }, children);
}
export default Component36126;
