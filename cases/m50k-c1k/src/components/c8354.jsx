import React from 'react';
const LABEL_8354 = 'component_8354';
export function Component8354({ value = 8354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8354, 'data-value': derived.doubled }, children);
}
export default Component8354;
