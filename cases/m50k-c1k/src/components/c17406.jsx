import React from 'react';
const LABEL_17406 = 'component_17406';
export function Component17406({ value = 17406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17406, 'data-value': derived.doubled }, children);
}
export default Component17406;
