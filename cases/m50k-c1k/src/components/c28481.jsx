import React from 'react';
const LABEL_28481 = 'component_28481';
export function Component28481({ value = 28481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28481, 'data-value': derived.doubled }, children);
}
export default Component28481;
