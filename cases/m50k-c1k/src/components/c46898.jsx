import React from 'react';
const LABEL_46898 = 'component_46898';
export function Component46898({ value = 46898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46898, 'data-value': derived.doubled }, children);
}
export default Component46898;
