import React from 'react';
const LABEL_27713 = 'component_27713';
export function Component27713({ value = 27713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27713, 'data-value': derived.doubled }, children);
}
export default Component27713;
