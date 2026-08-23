import React from 'react';
const LABEL_41872 = 'component_41872';
export function Component41872({ value = 41872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41872, 'data-value': derived.doubled }, children);
}
export default Component41872;
