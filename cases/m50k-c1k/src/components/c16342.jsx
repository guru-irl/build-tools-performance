import React from 'react';
const LABEL_16342 = 'component_16342';
export function Component16342({ value = 16342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16342, 'data-value': derived.doubled }, children);
}
export default Component16342;
