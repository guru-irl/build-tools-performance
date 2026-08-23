import React from 'react';
const LABEL_35966 = 'component_35966';
export function Component35966({ value = 35966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35966, 'data-value': derived.doubled }, children);
}
export default Component35966;
