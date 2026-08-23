import React from 'react';
const LABEL_41475 = 'component_41475';
export function Component41475({ value = 41475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41475, 'data-value': derived.doubled }, children);
}
export default Component41475;
