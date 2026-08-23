import React from 'react';
const LABEL_17194 = 'component_17194';
export function Component17194({ value = 17194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17194, 'data-value': derived.doubled }, children);
}
export default Component17194;
