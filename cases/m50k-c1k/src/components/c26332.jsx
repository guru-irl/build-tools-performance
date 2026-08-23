import React from 'react';
const LABEL_26332 = 'component_26332';
export function Component26332({ value = 26332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26332, 'data-value': derived.doubled }, children);
}
export default Component26332;
