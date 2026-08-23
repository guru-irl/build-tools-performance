import React from 'react';
const LABEL_19571 = 'component_19571';
export function Component19571({ value = 19571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19571, 'data-value': derived.doubled }, children);
}
export default Component19571;
