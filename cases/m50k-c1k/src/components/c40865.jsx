import React from 'react';
const LABEL_40865 = 'component_40865';
export function Component40865({ value = 40865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40865, 'data-value': derived.doubled }, children);
}
export default Component40865;
