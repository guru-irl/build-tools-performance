import React from 'react';
const LABEL_25943 = 'component_25943';
export function Component25943({ value = 25943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25943, 'data-value': derived.doubled }, children);
}
export default Component25943;
