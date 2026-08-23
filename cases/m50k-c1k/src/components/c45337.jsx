import React from 'react';
const LABEL_45337 = 'component_45337';
export function Component45337({ value = 45337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45337, 'data-value': derived.doubled }, children);
}
export default Component45337;
