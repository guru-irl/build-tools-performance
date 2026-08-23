import React from 'react';
const LABEL_38886 = 'component_38886';
export function Component38886({ value = 38886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38886, 'data-value': derived.doubled }, children);
}
export default Component38886;
