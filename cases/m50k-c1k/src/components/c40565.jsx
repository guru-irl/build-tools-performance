import React from 'react';
const LABEL_40565 = 'component_40565';
export function Component40565({ value = 40565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40565, 'data-value': derived.doubled }, children);
}
export default Component40565;
