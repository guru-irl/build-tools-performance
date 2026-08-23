import React from 'react';
const LABEL_1373 = 'component_1373';
export function Component1373({ value = 1373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1373, 'data-value': derived.doubled }, children);
}
export default Component1373;
