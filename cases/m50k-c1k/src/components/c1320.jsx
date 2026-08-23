import React from 'react';
const LABEL_1320 = 'component_1320';
export function Component1320({ value = 1320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1320, 'data-value': derived.doubled }, children);
}
export default Component1320;
