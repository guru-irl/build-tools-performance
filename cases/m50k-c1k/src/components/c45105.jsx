import React from 'react';
const LABEL_45105 = 'component_45105';
export function Component45105({ value = 45105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45105, 'data-value': derived.doubled }, children);
}
export default Component45105;
