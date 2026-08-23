import React from 'react';
const LABEL_46836 = 'component_46836';
export function Component46836({ value = 46836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46836, 'data-value': derived.doubled }, children);
}
export default Component46836;
