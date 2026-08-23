import React from 'react';
const LABEL_19367 = 'component_19367';
export function Component19367({ value = 19367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19367, 'data-value': derived.doubled }, children);
}
export default Component19367;
