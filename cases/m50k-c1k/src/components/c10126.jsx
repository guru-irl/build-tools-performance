import React from 'react';
const LABEL_10126 = 'component_10126';
export function Component10126({ value = 10126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10126, 'data-value': derived.doubled }, children);
}
export default Component10126;
