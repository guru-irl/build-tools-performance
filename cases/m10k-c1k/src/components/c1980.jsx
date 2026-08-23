import React from 'react';
const LABEL_1980 = 'component_1980';
export function Component1980({ value = 1980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1980, 'data-value': derived.doubled }, children);
}
export default Component1980;
