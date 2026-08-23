import React from 'react';
const LABEL_7886 = 'component_7886';
export function Component7886({ value = 7886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7886, 'data-value': derived.doubled }, children);
}
export default Component7886;
