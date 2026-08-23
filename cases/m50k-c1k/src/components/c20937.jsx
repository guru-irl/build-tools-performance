import React from 'react';
const LABEL_20937 = 'component_20937';
export function Component20937({ value = 20937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20937, 'data-value': derived.doubled }, children);
}
export default Component20937;
