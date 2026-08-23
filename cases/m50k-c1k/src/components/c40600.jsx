import React from 'react';
const LABEL_40600 = 'component_40600';
export function Component40600({ value = 40600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40600, 'data-value': derived.doubled }, children);
}
export default Component40600;
