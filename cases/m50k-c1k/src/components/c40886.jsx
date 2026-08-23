import React from 'react';
const LABEL_40886 = 'component_40886';
export function Component40886({ value = 40886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40886, 'data-value': derived.doubled }, children);
}
export default Component40886;
