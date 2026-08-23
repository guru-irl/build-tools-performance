import React from 'react';
const LABEL_45794 = 'component_45794';
export function Component45794({ value = 45794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45794, 'data-value': derived.doubled }, children);
}
export default Component45794;
