import React from 'react';
const LABEL_15781 = 'component_15781';
export function Component15781({ value = 15781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15781, 'data-value': derived.doubled }, children);
}
export default Component15781;
