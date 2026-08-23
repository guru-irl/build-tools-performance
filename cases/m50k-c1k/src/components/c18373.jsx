import React from 'react';
const LABEL_18373 = 'component_18373';
export function Component18373({ value = 18373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18373, 'data-value': derived.doubled }, children);
}
export default Component18373;
