import React from 'react';
const LABEL_28936 = 'component_28936';
export function Component28936({ value = 28936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28936, 'data-value': derived.doubled }, children);
}
export default Component28936;
