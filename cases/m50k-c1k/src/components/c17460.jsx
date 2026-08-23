import React from 'react';
const LABEL_17460 = 'component_17460';
export function Component17460({ value = 17460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17460, 'data-value': derived.doubled }, children);
}
export default Component17460;
