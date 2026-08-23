import React from 'react';
const LABEL_28332 = 'component_28332';
export function Component28332({ value = 28332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28332, 'data-value': derived.doubled }, children);
}
export default Component28332;
