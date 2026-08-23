import React from 'react';
const LABEL_424 = 'component_424';
export function Component424({ value = 424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_424, 'data-value': derived.doubled }, children);
}
export default Component424;
