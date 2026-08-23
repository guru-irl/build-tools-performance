import React from 'react';
const LABEL_46373 = 'component_46373';
export function Component46373({ value = 46373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46373, 'data-value': derived.doubled }, children);
}
export default Component46373;
