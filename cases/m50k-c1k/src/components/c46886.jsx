import React from 'react';
const LABEL_46886 = 'component_46886';
export function Component46886({ value = 46886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46886, 'data-value': derived.doubled }, children);
}
export default Component46886;
