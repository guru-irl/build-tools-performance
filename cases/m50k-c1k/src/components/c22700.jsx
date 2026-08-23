import React from 'react';
const LABEL_22700 = 'component_22700';
export function Component22700({ value = 22700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22700, 'data-value': derived.doubled }, children);
}
export default Component22700;
