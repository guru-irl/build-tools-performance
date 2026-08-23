import React from 'react';
const LABEL_25945 = 'component_25945';
export function Component25945({ value = 25945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25945, 'data-value': derived.doubled }, children);
}
export default Component25945;
