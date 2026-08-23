import React from 'react';
const LABEL_11897 = 'component_11897';
export function Component11897({ value = 11897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11897, 'data-value': derived.doubled }, children);
}
export default Component11897;
