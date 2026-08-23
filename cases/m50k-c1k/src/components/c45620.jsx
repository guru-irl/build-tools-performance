import React from 'react';
const LABEL_45620 = 'component_45620';
export function Component45620({ value = 45620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45620, 'data-value': derived.doubled }, children);
}
export default Component45620;
