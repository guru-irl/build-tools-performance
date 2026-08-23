import React from 'react';
const LABEL_36875 = 'component_36875';
export function Component36875({ value = 36875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36875, 'data-value': derived.doubled }, children);
}
export default Component36875;
