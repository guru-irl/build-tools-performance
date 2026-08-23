import React from 'react';
const LABEL_4962 = 'component_4962';
export function Component4962({ value = 4962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4962, 'data-value': derived.doubled }, children);
}
export default Component4962;
