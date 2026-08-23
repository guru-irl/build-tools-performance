import React from 'react';
const LABEL_41561 = 'component_41561';
export function Component41561({ value = 41561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41561, 'data-value': derived.doubled }, children);
}
export default Component41561;
