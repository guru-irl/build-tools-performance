import React from 'react';
const LABEL_41002 = 'component_41002';
export function Component41002({ value = 41002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41002, 'data-value': derived.doubled }, children);
}
export default Component41002;
