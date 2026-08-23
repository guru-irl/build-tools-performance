import React from 'react';
const LABEL_20449 = 'component_20449';
export function Component20449({ value = 20449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20449, 'data-value': derived.doubled }, children);
}
export default Component20449;
