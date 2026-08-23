import React from 'react';
const LABEL_45946 = 'component_45946';
export function Component45946({ value = 45946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45946, 'data-value': derived.doubled }, children);
}
export default Component45946;
