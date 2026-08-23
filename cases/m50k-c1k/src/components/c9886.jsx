import React from 'react';
const LABEL_9886 = 'component_9886';
export function Component9886({ value = 9886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9886, 'data-value': derived.doubled }, children);
}
export default Component9886;
