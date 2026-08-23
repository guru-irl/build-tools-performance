import React from 'react';
const LABEL_35934 = 'component_35934';
export function Component35934({ value = 35934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35934, 'data-value': derived.doubled }, children);
}
export default Component35934;
