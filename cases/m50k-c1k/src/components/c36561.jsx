import React from 'react';
const LABEL_36561 = 'component_36561';
export function Component36561({ value = 36561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36561, 'data-value': derived.doubled }, children);
}
export default Component36561;
