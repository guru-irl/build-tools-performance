import React from 'react';
const LABEL_46320 = 'component_46320';
export function Component46320({ value = 46320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46320, 'data-value': derived.doubled }, children);
}
export default Component46320;
