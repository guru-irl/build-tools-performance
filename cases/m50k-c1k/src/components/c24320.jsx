import React from 'react';
const LABEL_24320 = 'component_24320';
export function Component24320({ value = 24320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24320, 'data-value': derived.doubled }, children);
}
export default Component24320;
