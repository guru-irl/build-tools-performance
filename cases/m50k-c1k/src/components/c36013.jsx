import React from 'react';
const LABEL_36013 = 'component_36013';
export function Component36013({ value = 36013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36013, 'data-value': derived.doubled }, children);
}
export default Component36013;
