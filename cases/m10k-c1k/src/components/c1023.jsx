import React from 'react';
const LABEL_1023 = 'component_1023';
export function Component1023({ value = 1023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1023, 'data-value': derived.doubled }, children);
}
export default Component1023;
