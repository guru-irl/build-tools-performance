import React from 'react';
const LABEL_30385 = 'component_30385';
export function Component30385({ value = 30385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30385, 'data-value': derived.doubled }, children);
}
export default Component30385;
