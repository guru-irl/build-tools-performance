import React from 'react';
const LABEL_17566 = 'component_17566';
export function Component17566({ value = 17566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17566, 'data-value': derived.doubled }, children);
}
export default Component17566;
