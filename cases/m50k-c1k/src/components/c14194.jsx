import React from 'react';
const LABEL_14194 = 'component_14194';
export function Component14194({ value = 14194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14194, 'data-value': derived.doubled }, children);
}
export default Component14194;
