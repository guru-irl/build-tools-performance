import React from 'react';
const LABEL_6663 = 'component_6663';
export function Component6663({ value = 6663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6663, 'data-value': derived.doubled }, children);
}
export default Component6663;
