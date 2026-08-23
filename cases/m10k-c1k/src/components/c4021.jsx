import React from 'react';
const LABEL_4021 = 'component_4021';
export function Component4021({ value = 4021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4021, 'data-value': derived.doubled }, children);
}
export default Component4021;
