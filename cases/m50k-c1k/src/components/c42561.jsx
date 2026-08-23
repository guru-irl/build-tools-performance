import React from 'react';
const LABEL_42561 = 'component_42561';
export function Component42561({ value = 42561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42561, 'data-value': derived.doubled }, children);
}
export default Component42561;
