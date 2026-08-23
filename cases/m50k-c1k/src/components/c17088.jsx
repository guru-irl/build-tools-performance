import React from 'react';
const LABEL_17088 = 'component_17088';
export function Component17088({ value = 17088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17088, 'data-value': derived.doubled }, children);
}
export default Component17088;
