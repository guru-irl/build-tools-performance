import React from 'react';
const LABEL_2352 = 'component_2352';
export function Component2352({ value = 2352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2352, 'data-value': derived.doubled }, children);
}
export default Component2352;
