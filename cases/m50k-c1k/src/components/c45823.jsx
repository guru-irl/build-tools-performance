import React from 'react';
const LABEL_45823 = 'component_45823';
export function Component45823({ value = 45823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45823, 'data-value': derived.doubled }, children);
}
export default Component45823;
