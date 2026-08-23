import React from 'react';
const LABEL_2886 = 'component_2886';
export function Component2886({ value = 2886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2886, 'data-value': derived.doubled }, children);
}
export default Component2886;
