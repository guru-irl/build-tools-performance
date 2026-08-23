import React from 'react';
const LABEL_5886 = 'component_5886';
export function Component5886({ value = 5886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5886, 'data-value': derived.doubled }, children);
}
export default Component5886;
