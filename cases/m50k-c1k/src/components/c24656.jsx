import React from 'react';
const LABEL_24656 = 'component_24656';
export function Component24656({ value = 24656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24656, 'data-value': derived.doubled }, children);
}
export default Component24656;
