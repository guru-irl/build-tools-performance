import React from 'react';
const LABEL_2320 = 'component_2320';
export function Component2320({ value = 2320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2320, 'data-value': derived.doubled }, children);
}
export default Component2320;
