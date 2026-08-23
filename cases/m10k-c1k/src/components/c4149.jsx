import React from 'react';
const LABEL_4149 = 'component_4149';
export function Component4149({ value = 4149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4149, 'data-value': derived.doubled }, children);
}
export default Component4149;
