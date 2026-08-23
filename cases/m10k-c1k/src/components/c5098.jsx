import React from 'react';
const LABEL_5098 = 'component_5098';
export function Component5098({ value = 5098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5098, 'data-value': derived.doubled }, children);
}
export default Component5098;
