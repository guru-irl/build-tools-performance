import React from 'react';
const LABEL_11332 = 'component_11332';
export function Component11332({ value = 11332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11332, 'data-value': derived.doubled }, children);
}
export default Component11332;
