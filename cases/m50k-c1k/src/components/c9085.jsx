import React from 'react';
const LABEL_9085 = 'component_9085';
export function Component9085({ value = 9085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9085, 'data-value': derived.doubled }, children);
}
export default Component9085;
