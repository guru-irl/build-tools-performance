import React from 'react';
const LABEL_39365 = 'component_39365';
export function Component39365({ value = 39365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39365, 'data-value': derived.doubled }, children);
}
export default Component39365;
