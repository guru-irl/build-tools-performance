import React from 'react';
const LABEL_40903 = 'component_40903';
export function Component40903({ value = 40903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40903, 'data-value': derived.doubled }, children);
}
export default Component40903;
