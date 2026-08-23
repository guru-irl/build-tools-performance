import React from 'react';
const LABEL_19886 = 'component_19886';
export function Component19886({ value = 19886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19886, 'data-value': derived.doubled }, children);
}
export default Component19886;
