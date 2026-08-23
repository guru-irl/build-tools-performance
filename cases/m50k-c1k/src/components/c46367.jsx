import React from 'react';
const LABEL_46367 = 'component_46367';
export function Component46367({ value = 46367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46367, 'data-value': derived.doubled }, children);
}
export default Component46367;
