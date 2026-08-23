import React from 'react';
const LABEL_17424 = 'component_17424';
export function Component17424({ value = 17424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17424, 'data-value': derived.doubled }, children);
}
export default Component17424;
