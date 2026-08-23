import React from 'react';
const LABEL_41362 = 'component_41362';
export function Component41362({ value = 41362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41362, 'data-value': derived.doubled }, children);
}
export default Component41362;
