import React from 'react';
const LABEL_44337 = 'component_44337';
export function Component44337({ value = 44337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44337, 'data-value': derived.doubled }, children);
}
export default Component44337;
