import React from 'react';
const LABEL_45440 = 'component_45440';
export function Component45440({ value = 45440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45440, 'data-value': derived.doubled }, children);
}
export default Component45440;
