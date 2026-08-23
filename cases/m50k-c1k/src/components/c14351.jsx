import React from 'react';
const LABEL_14351 = 'component_14351';
export function Component14351({ value = 14351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14351, 'data-value': derived.doubled }, children);
}
export default Component14351;
