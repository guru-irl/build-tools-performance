import React from 'react';
const LABEL_45464 = 'component_45464';
export function Component45464({ value = 45464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45464, 'data-value': derived.doubled }, children);
}
export default Component45464;
