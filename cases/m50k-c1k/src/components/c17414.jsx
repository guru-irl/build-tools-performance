import React from 'react';
const LABEL_17414 = 'component_17414';
export function Component17414({ value = 17414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17414, 'data-value': derived.doubled }, children);
}
export default Component17414;
