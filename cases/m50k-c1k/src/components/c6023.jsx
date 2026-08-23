import React from 'react';
const LABEL_6023 = 'component_6023';
export function Component6023({ value = 6023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6023, 'data-value': derived.doubled }, children);
}
export default Component6023;
