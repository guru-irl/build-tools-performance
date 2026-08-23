import React from 'react';
const LABEL_45929 = 'component_45929';
export function Component45929({ value = 45929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45929, 'data-value': derived.doubled }, children);
}
export default Component45929;
