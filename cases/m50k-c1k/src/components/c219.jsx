import React from 'react';
const LABEL_219 = 'component_219';
export function Component219({ value = 219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_219, 'data-value': derived.doubled }, children);
}
export default Component219;
