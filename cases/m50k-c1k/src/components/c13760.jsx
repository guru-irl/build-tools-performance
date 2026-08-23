import React from 'react';
const LABEL_13760 = 'component_13760';
export function Component13760({ value = 13760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13760, 'data-value': derived.doubled }, children);
}
export default Component13760;
