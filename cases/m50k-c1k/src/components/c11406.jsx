import React from 'react';
const LABEL_11406 = 'component_11406';
export function Component11406({ value = 11406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11406, 'data-value': derived.doubled }, children);
}
export default Component11406;
