import React from 'react';
const LABEL_6164 = 'component_6164';
export function Component6164({ value = 6164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6164, 'data-value': derived.doubled }, children);
}
export default Component6164;
