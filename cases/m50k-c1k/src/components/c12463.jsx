import React from 'react';
const LABEL_12463 = 'component_12463';
export function Component12463({ value = 12463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12463, 'data-value': derived.doubled }, children);
}
export default Component12463;
