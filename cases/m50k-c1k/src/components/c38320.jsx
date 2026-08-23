import React from 'react';
const LABEL_38320 = 'component_38320';
export function Component38320({ value = 38320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38320, 'data-value': derived.doubled }, children);
}
export default Component38320;
