import React from 'react';
const LABEL_13217 = 'component_13217';
export function Component13217({ value = 13217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13217, 'data-value': derived.doubled }, children);
}
export default Component13217;
