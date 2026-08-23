import React from 'react';
const LABEL_42320 = 'component_42320';
export function Component42320({ value = 42320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42320, 'data-value': derived.doubled }, children);
}
export default Component42320;
