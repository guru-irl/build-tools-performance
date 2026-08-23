import React from 'react';
const LABEL_30259 = 'component_30259';
export function Component30259({ value = 30259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30259, 'data-value': derived.doubled }, children);
}
export default Component30259;
