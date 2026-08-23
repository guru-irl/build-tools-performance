import React from 'react';
const LABEL_11923 = 'component_11923';
export function Component11923({ value = 11923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11923, 'data-value': derived.doubled }, children);
}
export default Component11923;
