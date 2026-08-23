import React from 'react';
const LABEL_11726 = 'component_11726';
export function Component11726({ value = 11726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11726, 'data-value': derived.doubled }, children);
}
export default Component11726;
