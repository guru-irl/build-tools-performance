import React from 'react';
const LABEL_37140 = 'component_37140';
export function Component37140({ value = 37140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37140, 'data-value': derived.doubled }, children);
}
export default Component37140;
