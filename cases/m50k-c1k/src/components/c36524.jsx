import React from 'react';
const LABEL_36524 = 'component_36524';
export function Component36524({ value = 36524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36524, 'data-value': derived.doubled }, children);
}
export default Component36524;
