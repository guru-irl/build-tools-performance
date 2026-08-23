import React from 'react';
const LABEL_27630 = 'component_27630';
export function Component27630({ value = 27630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27630, 'data-value': derived.doubled }, children);
}
export default Component27630;
