import React from 'react';
const LABEL_31039 = 'component_31039';
export function Component31039({ value = 31039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31039, 'data-value': derived.doubled }, children);
}
export default Component31039;
