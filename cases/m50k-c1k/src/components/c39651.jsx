import React from 'react';
const LABEL_39651 = 'component_39651';
export function Component39651({ value = 39651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39651, 'data-value': derived.doubled }, children);
}
export default Component39651;
