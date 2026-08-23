import React from 'react';
const LABEL_39828 = 'component_39828';
export function Component39828({ value = 39828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39828, 'data-value': derived.doubled }, children);
}
export default Component39828;
