import React from 'react';
const LABEL_36308 = 'component_36308';
export function Component36308({ value = 36308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36308, 'data-value': derived.doubled }, children);
}
export default Component36308;
