import React from 'react';
const LABEL_31320 = 'component_31320';
export function Component31320({ value = 31320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31320, 'data-value': derived.doubled }, children);
}
export default Component31320;
