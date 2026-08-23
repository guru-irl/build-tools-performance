import React from 'react';
const LABEL_16744 = 'component_16744';
export function Component16744({ value = 16744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16744, 'data-value': derived.doubled }, children);
}
export default Component16744;
