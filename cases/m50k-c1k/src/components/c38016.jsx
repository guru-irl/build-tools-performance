import React from 'react';
const LABEL_38016 = 'component_38016';
export function Component38016({ value = 38016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38016, 'data-value': derived.doubled }, children);
}
export default Component38016;
