import React from 'react';
const LABEL_32686 = 'component_32686';
export function Component32686({ value = 32686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32686, 'data-value': derived.doubled }, children);
}
export default Component32686;
