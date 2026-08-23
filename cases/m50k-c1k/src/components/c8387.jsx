import React from 'react';
const LABEL_8387 = 'component_8387';
export function Component8387({ value = 8387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8387, 'data-value': derived.doubled }, children);
}
export default Component8387;
