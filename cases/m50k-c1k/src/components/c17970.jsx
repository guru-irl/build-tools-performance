import React from 'react';
const LABEL_17970 = 'component_17970';
export function Component17970({ value = 17970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17970, 'data-value': derived.doubled }, children);
}
export default Component17970;
