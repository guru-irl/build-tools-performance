import React from 'react';
const LABEL_10238 = 'component_10238';
export function Component10238({ value = 10238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10238, 'data-value': derived.doubled }, children);
}
export default Component10238;
