import React from 'react';
const LABEL_43490 = 'component_43490';
export function Component43490({ value = 43490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43490, 'data-value': derived.doubled }, children);
}
export default Component43490;
