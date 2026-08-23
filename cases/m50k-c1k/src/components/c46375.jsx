import React from 'react';
const LABEL_46375 = 'component_46375';
export function Component46375({ value = 46375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46375, 'data-value': derived.doubled }, children);
}
export default Component46375;
