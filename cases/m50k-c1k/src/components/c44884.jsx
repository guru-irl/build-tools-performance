import React from 'react';
const LABEL_44884 = 'component_44884';
export function Component44884({ value = 44884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44884, 'data-value': derived.doubled }, children);
}
export default Component44884;
