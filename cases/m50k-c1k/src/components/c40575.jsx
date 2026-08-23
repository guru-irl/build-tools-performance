import React from 'react';
const LABEL_40575 = 'component_40575';
export function Component40575({ value = 40575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40575, 'data-value': derived.doubled }, children);
}
export default Component40575;
