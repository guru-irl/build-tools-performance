import React from 'react';
const LABEL_36099 = 'component_36099';
export function Component36099({ value = 36099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36099, 'data-value': derived.doubled }, children);
}
export default Component36099;
