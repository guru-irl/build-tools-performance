import React from 'react';
const LABEL_25561 = 'component_25561';
export function Component25561({ value = 25561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25561, 'data-value': derived.doubled }, children);
}
export default Component25561;
