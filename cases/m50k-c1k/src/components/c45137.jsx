import React from 'react';
const LABEL_45137 = 'component_45137';
export function Component45137({ value = 45137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45137, 'data-value': derived.doubled }, children);
}
export default Component45137;
