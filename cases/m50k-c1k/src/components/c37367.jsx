import React from 'react';
const LABEL_37367 = 'component_37367';
export function Component37367({ value = 37367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37367, 'data-value': derived.doubled }, children);
}
export default Component37367;
