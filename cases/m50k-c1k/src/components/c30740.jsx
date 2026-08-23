import React from 'react';
const LABEL_30740 = 'component_30740';
export function Component30740({ value = 30740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30740, 'data-value': derived.doubled }, children);
}
export default Component30740;
