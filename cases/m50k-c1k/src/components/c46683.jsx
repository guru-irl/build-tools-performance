import React from 'react';
const LABEL_46683 = 'component_46683';
export function Component46683({ value = 46683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46683, 'data-value': derived.doubled }, children);
}
export default Component46683;
