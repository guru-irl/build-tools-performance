import React from 'react';
const LABEL_744 = 'component_744';
export function Component744({ value = 744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_744, 'data-value': derived.doubled }, children);
}
export default Component744;
