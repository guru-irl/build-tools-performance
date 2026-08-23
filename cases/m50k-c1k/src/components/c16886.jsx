import React from 'react';
const LABEL_16886 = 'component_16886';
export function Component16886({ value = 16886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16886, 'data-value': derived.doubled }, children);
}
export default Component16886;
