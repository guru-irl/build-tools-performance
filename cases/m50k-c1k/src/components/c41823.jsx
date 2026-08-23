import React from 'react';
const LABEL_41823 = 'component_41823';
export function Component41823({ value = 41823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41823, 'data-value': derived.doubled }, children);
}
export default Component41823;
