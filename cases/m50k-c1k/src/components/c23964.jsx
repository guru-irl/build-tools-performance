import React from 'react';
const LABEL_23964 = 'component_23964';
export function Component23964({ value = 23964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23964, 'data-value': derived.doubled }, children);
}
export default Component23964;
