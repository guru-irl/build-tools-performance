import React from 'react';
const LABEL_39818 = 'component_39818';
export function Component39818({ value = 39818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39818, 'data-value': derived.doubled }, children);
}
export default Component39818;
