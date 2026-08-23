import React from 'react';
const LABEL_40465 = 'component_40465';
export function Component40465({ value = 40465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40465, 'data-value': derived.doubled }, children);
}
export default Component40465;
