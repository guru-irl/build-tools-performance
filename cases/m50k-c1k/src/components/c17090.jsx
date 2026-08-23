import React from 'react';
const LABEL_17090 = 'component_17090';
export function Component17090({ value = 17090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17090, 'data-value': derived.doubled }, children);
}
export default Component17090;
