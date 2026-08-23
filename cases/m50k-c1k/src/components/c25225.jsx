import React from 'react';
const LABEL_25225 = 'component_25225';
export function Component25225({ value = 25225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25225, 'data-value': derived.doubled }, children);
}
export default Component25225;
