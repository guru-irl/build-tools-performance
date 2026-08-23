import React from 'react';
const LABEL_38876 = 'component_38876';
export function Component38876({ value = 38876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38876, 'data-value': derived.doubled }, children);
}
export default Component38876;
