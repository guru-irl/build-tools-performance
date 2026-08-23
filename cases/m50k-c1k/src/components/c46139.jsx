import React from 'react';
const LABEL_46139 = 'component_46139';
export function Component46139({ value = 46139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46139, 'data-value': derived.doubled }, children);
}
export default Component46139;
