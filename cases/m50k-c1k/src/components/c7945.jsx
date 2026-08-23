import React from 'react';
const LABEL_7945 = 'component_7945';
export function Component7945({ value = 7945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7945, 'data-value': derived.doubled }, children);
}
export default Component7945;
