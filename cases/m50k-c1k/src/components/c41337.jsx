import React from 'react';
const LABEL_41337 = 'component_41337';
export function Component41337({ value = 41337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41337, 'data-value': derived.doubled }, children);
}
export default Component41337;
