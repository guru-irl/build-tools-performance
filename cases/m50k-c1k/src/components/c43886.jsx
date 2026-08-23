import React from 'react';
const LABEL_43886 = 'component_43886';
export function Component43886({ value = 43886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43886, 'data-value': derived.doubled }, children);
}
export default Component43886;
