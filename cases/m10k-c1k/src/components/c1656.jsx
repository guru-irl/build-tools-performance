import React from 'react';
const LABEL_1656 = 'component_1656';
export function Component1656({ value = 1656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1656, 'data-value': derived.doubled }, children);
}
export default Component1656;
