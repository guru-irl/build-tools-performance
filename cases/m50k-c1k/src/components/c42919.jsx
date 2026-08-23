import React from 'react';
const LABEL_42919 = 'component_42919';
export function Component42919({ value = 42919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42919, 'data-value': derived.doubled }, children);
}
export default Component42919;
