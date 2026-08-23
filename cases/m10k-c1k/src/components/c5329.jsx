import React from 'react';
const LABEL_5329 = 'component_5329';
export function Component5329({ value = 5329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5329, 'data-value': derived.doubled }, children);
}
export default Component5329;
