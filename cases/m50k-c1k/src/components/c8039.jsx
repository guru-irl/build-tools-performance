import React from 'react';
const LABEL_8039 = 'component_8039';
export function Component8039({ value = 8039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8039, 'data-value': derived.doubled }, children);
}
export default Component8039;
