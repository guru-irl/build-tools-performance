import React from 'react';
const LABEL_17207 = 'component_17207';
export function Component17207({ value = 17207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17207, 'data-value': derived.doubled }, children);
}
export default Component17207;
