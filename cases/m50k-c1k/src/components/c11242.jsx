import React from 'react';
const LABEL_11242 = 'component_11242';
export function Component11242({ value = 11242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11242, 'data-value': derived.doubled }, children);
}
export default Component11242;
