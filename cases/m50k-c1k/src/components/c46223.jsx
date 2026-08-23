import React from 'react';
const LABEL_46223 = 'component_46223';
export function Component46223({ value = 46223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46223, 'data-value': derived.doubled }, children);
}
export default Component46223;
