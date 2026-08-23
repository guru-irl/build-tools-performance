import React from 'react';
const LABEL_37656 = 'component_37656';
export function Component37656({ value = 37656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37656, 'data-value': derived.doubled }, children);
}
export default Component37656;
