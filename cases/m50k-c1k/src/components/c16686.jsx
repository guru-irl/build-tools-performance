import React from 'react';
const LABEL_16686 = 'component_16686';
export function Component16686({ value = 16686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16686, 'data-value': derived.doubled }, children);
}
export default Component16686;
