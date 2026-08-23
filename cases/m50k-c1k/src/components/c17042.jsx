import React from 'react';
const LABEL_17042 = 'component_17042';
export function Component17042({ value = 17042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17042, 'data-value': derived.doubled }, children);
}
export default Component17042;
