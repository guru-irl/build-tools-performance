import React from 'react';
const LABEL_38897 = 'component_38897';
export function Component38897({ value = 38897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38897, 'data-value': derived.doubled }, children);
}
export default Component38897;
