import React from 'react';
const LABEL_38486 = 'component_38486';
export function Component38486({ value = 38486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38486, 'data-value': derived.doubled }, children);
}
export default Component38486;
