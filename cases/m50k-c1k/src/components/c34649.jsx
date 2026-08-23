import React from 'react';
const LABEL_34649 = 'component_34649';
export function Component34649({ value = 34649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34649, 'data-value': derived.doubled }, children);
}
export default Component34649;
