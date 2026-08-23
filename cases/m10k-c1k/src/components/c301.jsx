import React from 'react';
const LABEL_301 = 'component_301';
export function Component301({ value = 301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_301, 'data-value': derived.doubled }, children);
}
export default Component301;
