import React from 'react';
const LABEL_40561 = 'component_40561';
export function Component40561({ value = 40561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40561, 'data-value': derived.doubled }, children);
}
export default Component40561;
