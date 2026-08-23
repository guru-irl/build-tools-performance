import React from 'react';
const LABEL_10524 = 'component_10524';
export function Component10524({ value = 10524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10524, 'data-value': derived.doubled }, children);
}
export default Component10524;
