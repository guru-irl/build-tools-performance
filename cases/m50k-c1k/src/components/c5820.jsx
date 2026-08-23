import React from 'react';
const LABEL_5820 = 'component_5820';
export function Component5820({ value = 5820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5820, 'data-value': derived.doubled }, children);
}
export default Component5820;
