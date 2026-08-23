import React from 'react';
const LABEL_23373 = 'component_23373';
export function Component23373({ value = 23373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23373, 'data-value': derived.doubled }, children);
}
export default Component23373;
