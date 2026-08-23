import React from 'react';
const LABEL_6677 = 'component_6677';
export function Component6677({ value = 6677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6677, 'data-value': derived.doubled }, children);
}
export default Component6677;
