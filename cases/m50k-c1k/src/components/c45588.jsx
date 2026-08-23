import React from 'react';
const LABEL_45588 = 'component_45588';
export function Component45588({ value = 45588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45588, 'data-value': derived.doubled }, children);
}
export default Component45588;
