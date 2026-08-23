import React from 'react';
const LABEL_41558 = 'component_41558';
export function Component41558({ value = 41558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41558, 'data-value': derived.doubled }, children);
}
export default Component41558;
