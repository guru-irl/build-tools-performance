import React from 'react';
const LABEL_46080 = 'component_46080';
export function Component46080({ value = 46080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46080, 'data-value': derived.doubled }, children);
}
export default Component46080;
