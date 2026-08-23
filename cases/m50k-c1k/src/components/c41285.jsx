import React from 'react';
const LABEL_41285 = 'component_41285';
export function Component41285({ value = 41285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41285, 'data-value': derived.doubled }, children);
}
export default Component41285;
