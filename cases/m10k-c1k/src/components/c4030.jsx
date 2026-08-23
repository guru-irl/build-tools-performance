import React from 'react';
const LABEL_4030 = 'component_4030';
export function Component4030({ value = 4030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4030, 'data-value': derived.doubled }, children);
}
export default Component4030;
