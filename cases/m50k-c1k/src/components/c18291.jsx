import React from 'react';
const LABEL_18291 = 'component_18291';
export function Component18291({ value = 18291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18291, 'data-value': derived.doubled }, children);
}
export default Component18291;
