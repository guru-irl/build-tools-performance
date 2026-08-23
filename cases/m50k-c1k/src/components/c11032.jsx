import React from 'react';
const LABEL_11032 = 'component_11032';
export function Component11032({ value = 11032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11032, 'data-value': derived.doubled }, children);
}
export default Component11032;
