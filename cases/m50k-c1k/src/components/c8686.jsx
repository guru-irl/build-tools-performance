import React from 'react';
const LABEL_8686 = 'component_8686';
export function Component8686({ value = 8686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8686, 'data-value': derived.doubled }, children);
}
export default Component8686;
