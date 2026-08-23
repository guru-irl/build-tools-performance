import React from 'react';
const LABEL_45485 = 'component_45485';
export function Component45485({ value = 45485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45485, 'data-value': derived.doubled }, children);
}
export default Component45485;
