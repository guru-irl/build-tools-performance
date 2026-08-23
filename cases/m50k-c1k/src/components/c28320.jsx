import React from 'react';
const LABEL_28320 = 'component_28320';
export function Component28320({ value = 28320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28320, 'data-value': derived.doubled }, children);
}
export default Component28320;
