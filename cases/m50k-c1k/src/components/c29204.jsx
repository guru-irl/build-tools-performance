import React from 'react';
const LABEL_29204 = 'component_29204';
export function Component29204({ value = 29204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29204, 'data-value': derived.doubled }, children);
}
export default Component29204;
