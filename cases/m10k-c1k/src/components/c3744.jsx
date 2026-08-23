import React from 'react';
const LABEL_3744 = 'component_3744';
export function Component3744({ value = 3744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3744, 'data-value': derived.doubled }, children);
}
export default Component3744;
