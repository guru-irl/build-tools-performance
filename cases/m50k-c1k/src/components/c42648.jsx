import React from 'react';
const LABEL_42648 = 'component_42648';
export function Component42648({ value = 42648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42648, 'data-value': derived.doubled }, children);
}
export default Component42648;
