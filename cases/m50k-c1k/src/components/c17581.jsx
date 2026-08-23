import React from 'react';
const LABEL_17581 = 'component_17581';
export function Component17581({ value = 17581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17581, 'data-value': derived.doubled }, children);
}
export default Component17581;
