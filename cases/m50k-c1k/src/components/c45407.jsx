import React from 'react';
const LABEL_45407 = 'component_45407';
export function Component45407({ value = 45407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45407, 'data-value': derived.doubled }, children);
}
export default Component45407;
