import React from 'react';
const LABEL_30972 = 'component_30972';
export function Component30972({ value = 30972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30972, 'data-value': derived.doubled }, children);
}
export default Component30972;
