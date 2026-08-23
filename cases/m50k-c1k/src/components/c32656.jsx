import React from 'react';
const LABEL_32656 = 'component_32656';
export function Component32656({ value = 32656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32656, 'data-value': derived.doubled }, children);
}
export default Component32656;
