import React from 'react';
const LABEL_20936 = 'component_20936';
export function Component20936({ value = 20936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20936, 'data-value': derived.doubled }, children);
}
export default Component20936;
