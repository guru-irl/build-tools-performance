import React from 'react';
const LABEL_25411 = 'component_25411';
export function Component25411({ value = 25411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25411, 'data-value': derived.doubled }, children);
}
export default Component25411;
