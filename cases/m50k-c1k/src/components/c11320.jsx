import React from 'react';
const LABEL_11320 = 'component_11320';
export function Component11320({ value = 11320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11320, 'data-value': derived.doubled }, children);
}
export default Component11320;
