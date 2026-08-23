import React from 'react';
const LABEL_16126 = 'component_16126';
export function Component16126({ value = 16126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16126, 'data-value': derived.doubled }, children);
}
export default Component16126;
