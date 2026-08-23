import React from 'react';
const LABEL_45162 = 'component_45162';
export function Component45162({ value = 45162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45162, 'data-value': derived.doubled }, children);
}
export default Component45162;
