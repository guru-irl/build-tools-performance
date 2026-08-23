import React from 'react';
const LABEL_25741 = 'component_25741';
export function Component25741({ value = 25741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25741, 'data-value': derived.doubled }, children);
}
export default Component25741;
