import React from 'react';
const LABEL_19553 = 'component_19553';
export function Component19553({ value = 19553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19553, 'data-value': derived.doubled }, children);
}
export default Component19553;
