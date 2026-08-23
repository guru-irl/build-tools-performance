import React from 'react';
const LABEL_45068 = 'component_45068';
export function Component45068({ value = 45068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45068, 'data-value': derived.doubled }, children);
}
export default Component45068;
