import React from 'react';
const LABEL_8786 = 'component_8786';
export function Component8786({ value = 8786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8786, 'data-value': derived.doubled }, children);
}
export default Component8786;
