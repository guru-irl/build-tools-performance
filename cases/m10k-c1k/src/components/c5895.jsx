import React from 'react';
const LABEL_5895 = 'component_5895';
export function Component5895({ value = 5895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5895, 'data-value': derived.doubled }, children);
}
export default Component5895;
