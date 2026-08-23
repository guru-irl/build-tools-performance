import React from 'react';
const LABEL_23414 = 'component_23414';
export function Component23414({ value = 23414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23414, 'data-value': derived.doubled }, children);
}
export default Component23414;
