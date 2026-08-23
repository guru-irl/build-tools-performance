import React from 'react';
const LABEL_25884 = 'component_25884';
export function Component25884({ value = 25884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25884, 'data-value': derived.doubled }, children);
}
export default Component25884;
