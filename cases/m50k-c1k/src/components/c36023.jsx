import React from 'react';
const LABEL_36023 = 'component_36023';
export function Component36023({ value = 36023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36023, 'data-value': derived.doubled }, children);
}
export default Component36023;
