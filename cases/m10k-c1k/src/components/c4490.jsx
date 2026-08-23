import React from 'react';
const LABEL_4490 = 'component_4490';
export function Component4490({ value = 4490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4490, 'data-value': derived.doubled }, children);
}
export default Component4490;
