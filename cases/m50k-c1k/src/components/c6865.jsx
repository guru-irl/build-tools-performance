import React from 'react';
const LABEL_6865 = 'component_6865';
export function Component6865({ value = 6865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6865, 'data-value': derived.doubled }, children);
}
export default Component6865;
