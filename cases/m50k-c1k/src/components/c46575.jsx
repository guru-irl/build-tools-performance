import React from 'react';
const LABEL_46575 = 'component_46575';
export function Component46575({ value = 46575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46575, 'data-value': derived.doubled }, children);
}
export default Component46575;
