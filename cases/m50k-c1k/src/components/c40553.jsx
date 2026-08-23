import React from 'react';
const LABEL_40553 = 'component_40553';
export function Component40553({ value = 40553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40553, 'data-value': derived.doubled }, children);
}
export default Component40553;
