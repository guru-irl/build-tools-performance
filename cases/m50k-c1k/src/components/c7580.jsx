import React from 'react';
const LABEL_7580 = 'component_7580';
export function Component7580({ value = 7580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7580, 'data-value': derived.doubled }, children);
}
export default Component7580;
