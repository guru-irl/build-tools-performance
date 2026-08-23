import React from 'react';
const LABEL_10332 = 'component_10332';
export function Component10332({ value = 10332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10332, 'data-value': derived.doubled }, children);
}
export default Component10332;
