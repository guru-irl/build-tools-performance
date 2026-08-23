import React from 'react';
const LABEL_28621 = 'component_28621';
export function Component28621({ value = 28621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28621, 'data-value': derived.doubled }, children);
}
export default Component28621;
