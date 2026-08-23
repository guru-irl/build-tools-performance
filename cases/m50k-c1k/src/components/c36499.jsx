import React from 'react';
const LABEL_36499 = 'component_36499';
export function Component36499({ value = 36499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36499, 'data-value': derived.doubled }, children);
}
export default Component36499;
