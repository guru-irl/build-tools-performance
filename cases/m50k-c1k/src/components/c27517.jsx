import React from 'react';
const LABEL_27517 = 'component_27517';
export function Component27517({ value = 27517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27517, 'data-value': derived.doubled }, children);
}
export default Component27517;
