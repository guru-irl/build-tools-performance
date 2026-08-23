import React from 'react';
const LABEL_5686 = 'component_5686';
export function Component5686({ value = 5686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5686, 'data-value': derived.doubled }, children);
}
export default Component5686;
