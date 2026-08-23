import React from 'react';
const LABEL_29367 = 'component_29367';
export function Component29367({ value = 29367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29367, 'data-value': derived.doubled }, children);
}
export default Component29367;
