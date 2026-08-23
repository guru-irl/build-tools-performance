import React from 'react';
const LABEL_28337 = 'component_28337';
export function Component28337({ value = 28337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28337, 'data-value': derived.doubled }, children);
}
export default Component28337;
