import React from 'react';
const LABEL_46733 = 'component_46733';
export function Component46733({ value = 46733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46733, 'data-value': derived.doubled }, children);
}
export default Component46733;
