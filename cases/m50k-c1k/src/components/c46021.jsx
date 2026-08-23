import React from 'react';
const LABEL_46021 = 'component_46021';
export function Component46021({ value = 46021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46021, 'data-value': derived.doubled }, children);
}
export default Component46021;
