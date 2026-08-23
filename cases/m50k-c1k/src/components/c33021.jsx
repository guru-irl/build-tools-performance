import React from 'react';
const LABEL_33021 = 'component_33021';
export function Component33021({ value = 33021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33021, 'data-value': derived.doubled }, children);
}
export default Component33021;
