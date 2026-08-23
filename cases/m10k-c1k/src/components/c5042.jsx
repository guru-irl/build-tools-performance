import React from 'react';
const LABEL_5042 = 'component_5042';
export function Component5042({ value = 5042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5042, 'data-value': derived.doubled }, children);
}
export default Component5042;
