import React from 'react';
const LABEL_8989 = 'component_8989';
export function Component8989({ value = 8989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8989, 'data-value': derived.doubled }, children);
}
export default Component8989;
