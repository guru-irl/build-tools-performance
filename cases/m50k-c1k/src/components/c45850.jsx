import React from 'react';
const LABEL_45850 = 'component_45850';
export function Component45850({ value = 45850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45850, 'data-value': derived.doubled }, children);
}
export default Component45850;
