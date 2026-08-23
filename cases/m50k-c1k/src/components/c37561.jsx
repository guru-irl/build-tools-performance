import React from 'react';
const LABEL_37561 = 'component_37561';
export function Component37561({ value = 37561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37561, 'data-value': derived.doubled }, children);
}
export default Component37561;
