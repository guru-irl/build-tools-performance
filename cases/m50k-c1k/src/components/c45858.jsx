import React from 'react';
const LABEL_45858 = 'component_45858';
export function Component45858({ value = 45858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45858, 'data-value': derived.doubled }, children);
}
export default Component45858;
