import React from 'react';
const LABEL_45815 = 'component_45815';
export function Component45815({ value = 45815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45815, 'data-value': derived.doubled }, children);
}
export default Component45815;
