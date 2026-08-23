import React from 'react';
const LABEL_29292 = 'component_29292';
export function Component29292({ value = 29292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29292, 'data-value': derived.doubled }, children);
}
export default Component29292;
