import React from 'react';
const LABEL_35744 = 'component_35744';
export function Component35744({ value = 35744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35744, 'data-value': derived.doubled }, children);
}
export default Component35744;
