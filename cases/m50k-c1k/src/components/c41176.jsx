import React from 'react';
const LABEL_41176 = 'component_41176';
export function Component41176({ value = 41176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41176, 'data-value': derived.doubled }, children);
}
export default Component41176;
