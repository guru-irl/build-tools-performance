import React from 'react';
const LABEL_926 = 'component_926';
export function Component926({ value = 926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_926, 'data-value': derived.doubled }, children);
}
export default Component926;
