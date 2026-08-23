import React from 'react';
const LABEL_5901 = 'component_5901';
export function Component5901({ value = 5901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5901, 'data-value': derived.doubled }, children);
}
export default Component5901;
