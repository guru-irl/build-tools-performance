import React from 'react';
const LABEL_41941 = 'component_41941';
export function Component41941({ value = 41941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41941, 'data-value': derived.doubled }, children);
}
export default Component41941;
