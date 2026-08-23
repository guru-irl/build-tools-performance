import React from 'react';
const LABEL_7667 = 'component_7667';
export function Component7667({ value = 7667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7667, 'data-value': derived.doubled }, children);
}
export default Component7667;
