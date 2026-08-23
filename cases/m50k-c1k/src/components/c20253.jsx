import React from 'react';
const LABEL_20253 = 'component_20253';
export function Component20253({ value = 20253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20253, 'data-value': derived.doubled }, children);
}
export default Component20253;
