import React from 'react';
const LABEL_4223 = 'component_4223';
export function Component4223({ value = 4223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4223, 'data-value': derived.doubled }, children);
}
export default Component4223;
