import React from 'react';
const LABEL_4204 = 'component_4204';
export function Component4204({ value = 4204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4204, 'data-value': derived.doubled }, children);
}
export default Component4204;
