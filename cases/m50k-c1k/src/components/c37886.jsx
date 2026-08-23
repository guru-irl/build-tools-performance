import React from 'react';
const LABEL_37886 = 'component_37886';
export function Component37886({ value = 37886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37886, 'data-value': derived.doubled }, children);
}
export default Component37886;
