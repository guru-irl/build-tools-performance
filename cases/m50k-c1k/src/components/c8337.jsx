import React from 'react';
const LABEL_8337 = 'component_8337';
export function Component8337({ value = 8337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8337, 'data-value': derived.doubled }, children);
}
export default Component8337;
