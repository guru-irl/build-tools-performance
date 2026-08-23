import React from 'react';
const LABEL_41745 = 'component_41745';
export function Component41745({ value = 41745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41745, 'data-value': derived.doubled }, children);
}
export default Component41745;
