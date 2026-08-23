import React from 'react';
const LABEL_46695 = 'component_46695';
export function Component46695({ value = 46695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46695, 'data-value': derived.doubled }, children);
}
export default Component46695;
