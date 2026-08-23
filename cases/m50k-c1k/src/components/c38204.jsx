import React from 'react';
const LABEL_38204 = 'component_38204';
export function Component38204({ value = 38204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38204, 'data-value': derived.doubled }, children);
}
export default Component38204;
