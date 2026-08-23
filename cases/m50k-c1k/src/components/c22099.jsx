import React from 'react';
const LABEL_22099 = 'component_22099';
export function Component22099({ value = 22099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22099, 'data-value': derived.doubled }, children);
}
export default Component22099;
