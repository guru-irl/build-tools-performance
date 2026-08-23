import React from 'react';
const LABEL_22561 = 'component_22561';
export function Component22561({ value = 22561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22561, 'data-value': derived.doubled }, children);
}
export default Component22561;
