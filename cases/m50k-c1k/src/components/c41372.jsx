import React from 'react';
const LABEL_41372 = 'component_41372';
export function Component41372({ value = 41372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41372, 'data-value': derived.doubled }, children);
}
export default Component41372;
