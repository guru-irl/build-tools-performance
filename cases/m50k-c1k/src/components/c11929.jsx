import React from 'react';
const LABEL_11929 = 'component_11929';
export function Component11929({ value = 11929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11929, 'data-value': derived.doubled }, children);
}
export default Component11929;
