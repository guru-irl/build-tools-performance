import React from 'react';
const LABEL_40123 = 'component_40123';
export function Component40123({ value = 40123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40123, 'data-value': derived.doubled }, children);
}
export default Component40123;
