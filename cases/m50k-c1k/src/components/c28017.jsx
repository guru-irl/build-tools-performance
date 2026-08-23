import React from 'react';
const LABEL_28017 = 'component_28017';
export function Component28017({ value = 28017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28017, 'data-value': derived.doubled }, children);
}
export default Component28017;
