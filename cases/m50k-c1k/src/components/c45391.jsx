import React from 'react';
const LABEL_45391 = 'component_45391';
export function Component45391({ value = 45391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45391, 'data-value': derived.doubled }, children);
}
export default Component45391;
