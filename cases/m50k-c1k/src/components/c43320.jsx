import React from 'react';
const LABEL_43320 = 'component_43320';
export function Component43320({ value = 43320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43320, 'data-value': derived.doubled }, children);
}
export default Component43320;
