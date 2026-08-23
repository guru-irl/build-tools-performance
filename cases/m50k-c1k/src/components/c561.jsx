import React from 'react';
const LABEL_561 = 'component_561';
export function Component561({ value = 561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_561, 'data-value': derived.doubled }, children);
}
export default Component561;
