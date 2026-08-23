import React from 'react';
const LABEL_29886 = 'component_29886';
export function Component29886({ value = 29886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29886, 'data-value': derived.doubled }, children);
}
export default Component29886;
