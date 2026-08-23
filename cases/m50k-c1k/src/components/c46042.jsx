import React from 'react';
const LABEL_46042 = 'component_46042';
export function Component46042({ value = 46042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46042, 'data-value': derived.doubled }, children);
}
export default Component46042;
