import React from 'react';
const LABEL_17349 = 'component_17349';
export function Component17349({ value = 17349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17349, 'data-value': derived.doubled }, children);
}
export default Component17349;
