import React from 'react';
const LABEL_38521 = 'component_38521';
export function Component38521({ value = 38521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38521, 'data-value': derived.doubled }, children);
}
export default Component38521;
