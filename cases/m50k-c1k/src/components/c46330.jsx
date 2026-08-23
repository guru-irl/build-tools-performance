import React from 'react';
const LABEL_46330 = 'component_46330';
export function Component46330({ value = 46330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46330, 'data-value': derived.doubled }, children);
}
export default Component46330;
