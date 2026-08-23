import React from 'react';
const LABEL_15886 = 'component_15886';
export function Component15886({ value = 15886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15886, 'data-value': derived.doubled }, children);
}
export default Component15886;
