import React from 'react';
const LABEL_4718 = 'component_4718';
export function Component4718({ value = 4718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4718, 'data-value': derived.doubled }, children);
}
export default Component4718;
