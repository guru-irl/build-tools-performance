import React from 'react';
const LABEL_41324 = 'component_41324';
export function Component41324({ value = 41324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41324, 'data-value': derived.doubled }, children);
}
export default Component41324;
