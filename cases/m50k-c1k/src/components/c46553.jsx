import React from 'react';
const LABEL_46553 = 'component_46553';
export function Component46553({ value = 46553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46553, 'data-value': derived.doubled }, children);
}
export default Component46553;
