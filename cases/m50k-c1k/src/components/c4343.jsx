import React from 'react';
const LABEL_4343 = 'component_4343';
export function Component4343({ value = 4343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4343, 'data-value': derived.doubled }, children);
}
export default Component4343;
