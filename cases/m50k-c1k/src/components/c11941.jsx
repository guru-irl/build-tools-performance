import React from 'react';
const LABEL_11941 = 'component_11941';
export function Component11941({ value = 11941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11941, 'data-value': derived.doubled }, children);
}
export default Component11941;
