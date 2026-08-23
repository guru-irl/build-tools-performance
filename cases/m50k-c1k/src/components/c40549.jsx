import React from 'react';
const LABEL_40549 = 'component_40549';
export function Component40549({ value = 40549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40549, 'data-value': derived.doubled }, children);
}
export default Component40549;
