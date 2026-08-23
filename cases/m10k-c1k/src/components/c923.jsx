import React from 'react';
const LABEL_923 = 'component_923';
export function Component923({ value = 923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_923, 'data-value': derived.doubled }, children);
}
export default Component923;
