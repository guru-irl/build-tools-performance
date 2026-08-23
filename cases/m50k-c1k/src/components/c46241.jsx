import React from 'react';
const LABEL_46241 = 'component_46241';
export function Component46241({ value = 46241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46241, 'data-value': derived.doubled }, children);
}
export default Component46241;
