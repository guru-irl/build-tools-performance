import React from 'react';
const LABEL_5499 = 'component_5499';
export function Component5499({ value = 5499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5499, 'data-value': derived.doubled }, children);
}
export default Component5499;
