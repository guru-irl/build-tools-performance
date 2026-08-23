import React from 'react';
const LABEL_2014 = 'component_2014';
export function Component2014({ value = 2014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2014, 'data-value': derived.doubled }, children);
}
export default Component2014;
