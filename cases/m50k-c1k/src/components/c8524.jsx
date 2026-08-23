import React from 'react';
const LABEL_8524 = 'component_8524';
export function Component8524({ value = 8524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8524, 'data-value': derived.doubled }, children);
}
export default Component8524;
