import React from 'react';
const LABEL_28892 = 'component_28892';
export function Component28892({ value = 28892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28892, 'data-value': derived.doubled }, children);
}
export default Component28892;
