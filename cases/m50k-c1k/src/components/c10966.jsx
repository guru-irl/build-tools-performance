import React from 'react';
const LABEL_10966 = 'component_10966';
export function Component10966({ value = 10966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10966, 'data-value': derived.doubled }, children);
}
export default Component10966;
