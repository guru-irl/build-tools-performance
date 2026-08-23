import React from 'react';
const LABEL_4283 = 'component_4283';
export function Component4283({ value = 4283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4283, 'data-value': derived.doubled }, children);
}
export default Component4283;
