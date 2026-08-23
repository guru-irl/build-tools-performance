import React from 'react';
const LABEL_36387 = 'component_36387';
export function Component36387({ value = 36387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36387, 'data-value': derived.doubled }, children);
}
export default Component36387;
