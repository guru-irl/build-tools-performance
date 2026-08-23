import React from 'react';
const LABEL_8693 = 'component_8693';
export function Component8693({ value = 8693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8693, 'data-value': derived.doubled }, children);
}
export default Component8693;
