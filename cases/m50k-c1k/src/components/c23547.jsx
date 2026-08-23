import React from 'react';
const LABEL_23547 = 'component_23547';
export function Component23547({ value = 23547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23547, 'data-value': derived.doubled }, children);
}
export default Component23547;
