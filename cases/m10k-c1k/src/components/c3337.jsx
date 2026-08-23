import React from 'react';
const LABEL_3337 = 'component_3337';
export function Component3337({ value = 3337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3337, 'data-value': derived.doubled }, children);
}
export default Component3337;
