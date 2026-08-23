import React from 'react';
const LABEL_42383 = 'component_42383';
export function Component42383({ value = 42383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42383, 'data-value': derived.doubled }, children);
}
export default Component42383;
