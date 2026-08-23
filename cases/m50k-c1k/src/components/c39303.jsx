import React from 'react';
const LABEL_39303 = 'component_39303';
export function Component39303({ value = 39303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39303, 'data-value': derived.doubled }, children);
}
export default Component39303;
