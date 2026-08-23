import React from 'react';
const LABEL_45734 = 'component_45734';
export function Component45734({ value = 45734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45734, 'data-value': derived.doubled }, children);
}
export default Component45734;
