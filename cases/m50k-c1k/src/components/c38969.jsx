import React from 'react';
const LABEL_38969 = 'component_38969';
export function Component38969({ value = 38969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38969, 'data-value': derived.doubled }, children);
}
export default Component38969;
