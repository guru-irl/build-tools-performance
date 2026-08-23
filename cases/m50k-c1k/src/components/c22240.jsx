import React from 'react';
const LABEL_22240 = 'component_22240';
export function Component22240({ value = 22240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22240, 'data-value': derived.doubled }, children);
}
export default Component22240;
