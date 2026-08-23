import React from 'react';
const LABEL_44034 = 'component_44034';
export function Component44034({ value = 44034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44034, 'data-value': derived.doubled }, children);
}
export default Component44034;
