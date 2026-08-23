import React from 'react';
const LABEL_4491 = 'component_4491';
export function Component4491({ value = 4491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4491, 'data-value': derived.doubled }, children);
}
export default Component4491;
