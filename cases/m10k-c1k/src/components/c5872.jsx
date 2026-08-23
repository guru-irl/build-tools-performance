import React from 'react';
const LABEL_5872 = 'component_5872';
export function Component5872({ value = 5872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5872, 'data-value': derived.doubled }, children);
}
export default Component5872;
