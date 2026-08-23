import React from 'react';
const LABEL_41886 = 'component_41886';
export function Component41886({ value = 41886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41886, 'data-value': derived.doubled }, children);
}
export default Component41886;
