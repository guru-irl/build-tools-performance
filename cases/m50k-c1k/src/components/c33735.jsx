import React from 'react';
const LABEL_33735 = 'component_33735';
export function Component33735({ value = 33735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33735, 'data-value': derived.doubled }, children);
}
export default Component33735;
