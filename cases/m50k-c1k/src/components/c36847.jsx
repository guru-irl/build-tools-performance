import React from 'react';
const LABEL_36847 = 'component_36847';
export function Component36847({ value = 36847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36847, 'data-value': derived.doubled }, children);
}
export default Component36847;
