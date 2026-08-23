import React from 'react';
const LABEL_40615 = 'component_40615';
export function Component40615({ value = 40615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40615, 'data-value': derived.doubled }, children);
}
export default Component40615;
