import React from 'react';
const LABEL_40697 = 'component_40697';
export function Component40697({ value = 40697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40697, 'data-value': derived.doubled }, children);
}
export default Component40697;
