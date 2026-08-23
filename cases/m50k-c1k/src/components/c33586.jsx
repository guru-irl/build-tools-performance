import React from 'react';
const LABEL_33586 = 'component_33586';
export function Component33586({ value = 33586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33586, 'data-value': derived.doubled }, children);
}
export default Component33586;
