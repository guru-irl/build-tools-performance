import React from 'react';
const LABEL_15965 = 'component_15965';
export function Component15965({ value = 15965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15965, 'data-value': derived.doubled }, children);
}
export default Component15965;
