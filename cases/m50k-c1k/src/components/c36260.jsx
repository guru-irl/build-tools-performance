import React from 'react';
const LABEL_36260 = 'component_36260';
export function Component36260({ value = 36260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36260, 'data-value': derived.doubled }, children);
}
export default Component36260;
