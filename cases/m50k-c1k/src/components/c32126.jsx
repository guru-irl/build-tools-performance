import React from 'react';
const LABEL_32126 = 'component_32126';
export function Component32126({ value = 32126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32126, 'data-value': derived.doubled }, children);
}
export default Component32126;
