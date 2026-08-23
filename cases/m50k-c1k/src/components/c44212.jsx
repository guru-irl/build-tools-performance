import React from 'react';
const LABEL_44212 = 'component_44212';
export function Component44212({ value = 44212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44212, 'data-value': derived.doubled }, children);
}
export default Component44212;
