import React from 'react';
const LABEL_2021 = 'component_2021';
export function Component2021({ value = 2021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2021, 'data-value': derived.doubled }, children);
}
export default Component2021;
