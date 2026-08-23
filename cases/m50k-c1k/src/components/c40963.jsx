import React from 'react';
const LABEL_40963 = 'component_40963';
export function Component40963({ value = 40963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40963, 'data-value': derived.doubled }, children);
}
export default Component40963;
