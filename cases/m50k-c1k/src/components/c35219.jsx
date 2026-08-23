import React from 'react';
const LABEL_35219 = 'component_35219';
export function Component35219({ value = 35219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35219, 'data-value': derived.doubled }, children);
}
export default Component35219;
