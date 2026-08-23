import React from 'react';
const LABEL_37982 = 'component_37982';
export function Component37982({ value = 37982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37982, 'data-value': derived.doubled }, children);
}
export default Component37982;
