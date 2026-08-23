import React from 'react';
const LABEL_30852 = 'component_30852';
export function Component30852({ value = 30852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30852, 'data-value': derived.doubled }, children);
}
export default Component30852;
