import React from 'react';
const LABEL_36194 = 'component_36194';
export function Component36194({ value = 36194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36194, 'data-value': derived.doubled }, children);
}
export default Component36194;
