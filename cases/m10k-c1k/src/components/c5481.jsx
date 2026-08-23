import React from 'react';
const LABEL_5481 = 'component_5481';
export function Component5481({ value = 5481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5481, 'data-value': derived.doubled }, children);
}
export default Component5481;
