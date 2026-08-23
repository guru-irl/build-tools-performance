import React from 'react';
const LABEL_18561 = 'component_18561';
export function Component18561({ value = 18561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18561, 'data-value': derived.doubled }, children);
}
export default Component18561;
