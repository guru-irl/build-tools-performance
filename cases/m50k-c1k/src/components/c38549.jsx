import React from 'react';
const LABEL_38549 = 'component_38549';
export function Component38549({ value = 38549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38549, 'data-value': derived.doubled }, children);
}
export default Component38549;
