import React from 'react';
const LABEL_31974 = 'component_31974';
export function Component31974({ value = 31974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31974, 'data-value': derived.doubled }, children);
}
export default Component31974;
