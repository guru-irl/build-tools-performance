import React from 'react';
const LABEL_4003 = 'component_4003';
export function Component4003({ value = 4003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4003, 'data-value': derived.doubled }, children);
}
export default Component4003;
