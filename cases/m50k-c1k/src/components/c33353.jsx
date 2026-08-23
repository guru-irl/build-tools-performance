import React from 'react';
const LABEL_33353 = 'component_33353';
export function Component33353({ value = 33353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33353, 'data-value': derived.doubled }, children);
}
export default Component33353;
