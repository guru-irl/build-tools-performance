import React from 'react';
const LABEL_8306 = 'component_8306';
export function Component8306({ value = 8306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8306, 'data-value': derived.doubled }, children);
}
export default Component8306;
