import React from 'react';
const LABEL_11798 = 'component_11798';
export function Component11798({ value = 11798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11798, 'data-value': derived.doubled }, children);
}
export default Component11798;
