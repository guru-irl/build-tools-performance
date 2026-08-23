import React from 'react';
const LABEL_25486 = 'component_25486';
export function Component25486({ value = 25486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25486, 'data-value': derived.doubled }, children);
}
export default Component25486;
