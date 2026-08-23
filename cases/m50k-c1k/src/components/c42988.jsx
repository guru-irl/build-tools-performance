import React from 'react';
const LABEL_42988 = 'component_42988';
export function Component42988({ value = 42988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42988, 'data-value': derived.doubled }, children);
}
export default Component42988;
