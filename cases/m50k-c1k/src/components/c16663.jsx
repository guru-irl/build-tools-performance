import React from 'react';
const LABEL_16663 = 'component_16663';
export function Component16663({ value = 16663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16663, 'data-value': derived.doubled }, children);
}
export default Component16663;
