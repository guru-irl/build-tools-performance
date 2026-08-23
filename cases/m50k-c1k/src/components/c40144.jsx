import React from 'react';
const LABEL_40144 = 'component_40144';
export function Component40144({ value = 40144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40144, 'data-value': derived.doubled }, children);
}
export default Component40144;
