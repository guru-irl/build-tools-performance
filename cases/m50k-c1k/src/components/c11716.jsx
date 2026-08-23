import React from 'react';
const LABEL_11716 = 'component_11716';
export function Component11716({ value = 11716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11716, 'data-value': derived.doubled }, children);
}
export default Component11716;
