import React from 'react';
const LABEL_36414 = 'component_36414';
export function Component36414({ value = 36414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36414, 'data-value': derived.doubled }, children);
}
export default Component36414;
