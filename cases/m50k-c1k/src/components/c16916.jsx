import React from 'react';
const LABEL_16916 = 'component_16916';
export function Component16916({ value = 16916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16916, 'data-value': derived.doubled }, children);
}
export default Component16916;
