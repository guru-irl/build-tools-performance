import React from 'react';
const LABEL_45063 = 'component_45063';
export function Component45063({ value = 45063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45063, 'data-value': derived.doubled }, children);
}
export default Component45063;
