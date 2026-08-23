import React from 'react';
const LABEL_10327 = 'component_10327';
export function Component10327({ value = 10327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10327, 'data-value': derived.doubled }, children);
}
export default Component10327;
