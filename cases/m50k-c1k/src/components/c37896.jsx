import React from 'react';
const LABEL_37896 = 'component_37896';
export function Component37896({ value = 37896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37896, 'data-value': derived.doubled }, children);
}
export default Component37896;
