import React from 'react';
const LABEL_14713 = 'component_14713';
export function Component14713({ value = 14713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14713, 'data-value': derived.doubled }, children);
}
export default Component14713;
