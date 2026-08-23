import React from 'react';
const LABEL_25980 = 'component_25980';
export function Component25980({ value = 25980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25980, 'data-value': derived.doubled }, children);
}
export default Component25980;
