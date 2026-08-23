import React from 'react';
const LABEL_22217 = 'component_22217';
export function Component22217({ value = 22217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22217, 'data-value': derived.doubled }, children);
}
export default Component22217;
