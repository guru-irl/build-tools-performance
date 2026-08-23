import React from 'react';
const LABEL_24671 = 'component_24671';
export function Component24671({ value = 24671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24671, 'data-value': derived.doubled }, children);
}
export default Component24671;
