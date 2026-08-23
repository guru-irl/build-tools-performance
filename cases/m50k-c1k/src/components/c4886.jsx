import React from 'react';
const LABEL_4886 = 'component_4886';
export function Component4886({ value = 4886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4886, 'data-value': derived.doubled }, children);
}
export default Component4886;
