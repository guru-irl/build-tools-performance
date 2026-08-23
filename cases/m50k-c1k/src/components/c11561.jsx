import React from 'react';
const LABEL_11561 = 'component_11561';
export function Component11561({ value = 11561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11561, 'data-value': derived.doubled }, children);
}
export default Component11561;
