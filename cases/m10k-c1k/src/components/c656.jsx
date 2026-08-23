import React from 'react';
const LABEL_656 = 'component_656';
export function Component656({ value = 656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_656, 'data-value': derived.doubled }, children);
}
export default Component656;
