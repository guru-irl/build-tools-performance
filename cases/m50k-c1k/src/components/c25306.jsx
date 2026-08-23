import React from 'react';
const LABEL_25306 = 'component_25306';
export function Component25306({ value = 25306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25306, 'data-value': derived.doubled }, children);
}
export default Component25306;
