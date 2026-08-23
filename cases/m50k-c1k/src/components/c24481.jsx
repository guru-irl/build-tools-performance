import React from 'react';
const LABEL_24481 = 'component_24481';
export function Component24481({ value = 24481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24481, 'data-value': derived.doubled }, children);
}
export default Component24481;
