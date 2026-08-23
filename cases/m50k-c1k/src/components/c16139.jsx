import React from 'react';
const LABEL_16139 = 'component_16139';
export function Component16139({ value = 16139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16139, 'data-value': derived.doubled }, children);
}
export default Component16139;
