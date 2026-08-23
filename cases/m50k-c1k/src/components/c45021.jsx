import React from 'react';
const LABEL_45021 = 'component_45021';
export function Component45021({ value = 45021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45021, 'data-value': derived.doubled }, children);
}
export default Component45021;
