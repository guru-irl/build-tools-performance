import React from 'react';
const LABEL_39996 = 'component_39996';
export function Component39996({ value = 39996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39996, 'data-value': derived.doubled }, children);
}
export default Component39996;
