import React from 'react';
const LABEL_886 = 'component_886';
export function Component886({ value = 886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_886, 'data-value': derived.doubled }, children);
}
export default Component886;
