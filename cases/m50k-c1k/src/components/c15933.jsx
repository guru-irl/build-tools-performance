import React from 'react';
const LABEL_15933 = 'component_15933';
export function Component15933({ value = 15933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15933, 'data-value': derived.doubled }, children);
}
export default Component15933;
