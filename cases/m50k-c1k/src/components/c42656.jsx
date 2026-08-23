import React from 'react';
const LABEL_42656 = 'component_42656';
export function Component42656({ value = 42656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42656, 'data-value': derived.doubled }, children);
}
export default Component42656;
