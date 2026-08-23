import React from 'react';
const LABEL_45690 = 'component_45690';
export function Component45690({ value = 45690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45690, 'data-value': derived.doubled }, children);
}
export default Component45690;
