import React from 'react';
const LABEL_45591 = 'component_45591';
export function Component45591({ value = 45591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45591, 'data-value': derived.doubled }, children);
}
export default Component45591;
