import React from 'react';
const LABEL_15686 = 'component_15686';
export function Component15686({ value = 15686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15686, 'data-value': derived.doubled }, children);
}
export default Component15686;
