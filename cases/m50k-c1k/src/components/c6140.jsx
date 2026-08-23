import React from 'react';
const LABEL_6140 = 'component_6140';
export function Component6140({ value = 6140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6140, 'data-value': derived.doubled }, children);
}
export default Component6140;
