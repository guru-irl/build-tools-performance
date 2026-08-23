import React from 'react';
const LABEL_38319 = 'component_38319';
export function Component38319({ value = 38319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38319, 'data-value': derived.doubled }, children);
}
export default Component38319;
