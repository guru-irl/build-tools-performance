import React from 'react';
const LABEL_20424 = 'component_20424';
export function Component20424({ value = 20424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20424, 'data-value': derived.doubled }, children);
}
export default Component20424;
