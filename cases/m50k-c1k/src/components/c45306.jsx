import React from 'react';
const LABEL_45306 = 'component_45306';
export function Component45306({ value = 45306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45306, 'data-value': derived.doubled }, children);
}
export default Component45306;
