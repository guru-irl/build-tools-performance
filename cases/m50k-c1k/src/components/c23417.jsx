import React from 'react';
const LABEL_23417 = 'component_23417';
export function Component23417({ value = 23417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23417, 'data-value': derived.doubled }, children);
}
export default Component23417;
