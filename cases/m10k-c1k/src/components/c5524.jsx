import React from 'react';
const LABEL_5524 = 'component_5524';
export function Component5524({ value = 5524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5524, 'data-value': derived.doubled }, children);
}
export default Component5524;
