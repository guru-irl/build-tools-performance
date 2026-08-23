import React from 'react';
const LABEL_46238 = 'component_46238';
export function Component46238({ value = 46238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46238, 'data-value': derived.doubled }, children);
}
export default Component46238;
