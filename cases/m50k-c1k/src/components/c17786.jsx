import React from 'react';
const LABEL_17786 = 'component_17786';
export function Component17786({ value = 17786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17786, 'data-value': derived.doubled }, children);
}
export default Component17786;
