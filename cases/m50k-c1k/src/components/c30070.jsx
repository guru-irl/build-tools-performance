import React from 'react';
const LABEL_30070 = 'component_30070';
export function Component30070({ value = 30070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30070, 'data-value': derived.doubled }, children);
}
export default Component30070;
