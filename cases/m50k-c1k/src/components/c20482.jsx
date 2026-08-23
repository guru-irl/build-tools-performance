import React from 'react';
const LABEL_20482 = 'component_20482';
export function Component20482({ value = 20482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20482, 'data-value': derived.doubled }, children);
}
export default Component20482;
