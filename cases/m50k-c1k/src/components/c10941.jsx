import React from 'react';
const LABEL_10941 = 'component_10941';
export function Component10941({ value = 10941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10941, 'data-value': derived.doubled }, children);
}
export default Component10941;
