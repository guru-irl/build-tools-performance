import React from 'react';
const LABEL_12188 = 'component_12188';
export function Component12188({ value = 12188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12188, 'data-value': derived.doubled }, children);
}
export default Component12188;
