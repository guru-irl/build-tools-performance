import React from 'react';
const LABEL_3886 = 'component_3886';
export function Component3886({ value = 3886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3886, 'data-value': derived.doubled }, children);
}
export default Component3886;
