import React from 'react';
const LABEL_14902 = 'component_14902';
export function Component14902({ value = 14902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14902, 'data-value': derived.doubled }, children);
}
export default Component14902;
