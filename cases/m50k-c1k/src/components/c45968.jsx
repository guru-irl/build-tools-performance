import React from 'react';
const LABEL_45968 = 'component_45968';
export function Component45968({ value = 45968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45968, 'data-value': derived.doubled }, children);
}
export default Component45968;
