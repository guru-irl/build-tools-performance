import React from 'react';
const LABEL_28405 = 'component_28405';
export function Component28405({ value = 28405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28405, 'data-value': derived.doubled }, children);
}
export default Component28405;
