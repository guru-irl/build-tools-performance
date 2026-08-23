import React from 'react';
const LABEL_6016 = 'component_6016';
export function Component6016({ value = 6016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6016, 'data-value': derived.doubled }, children);
}
export default Component6016;
