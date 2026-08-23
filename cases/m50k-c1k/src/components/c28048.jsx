import React from 'react';
const LABEL_28048 = 'component_28048';
export function Component28048({ value = 28048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28048, 'data-value': derived.doubled }, children);
}
export default Component28048;
