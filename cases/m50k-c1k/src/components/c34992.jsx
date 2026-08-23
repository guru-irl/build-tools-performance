import React from 'react';
const LABEL_34992 = 'component_34992';
export function Component34992({ value = 34992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34992, 'data-value': derived.doubled }, children);
}
export default Component34992;
