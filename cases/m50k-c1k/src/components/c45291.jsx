import React from 'react';
const LABEL_45291 = 'component_45291';
export function Component45291({ value = 45291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45291, 'data-value': derived.doubled }, children);
}
export default Component45291;
