import React from 'react';
const LABEL_26390 = 'component_26390';
export function Component26390({ value = 26390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26390, 'data-value': derived.doubled }, children);
}
export default Component26390;
