import React from 'react';
const LABEL_11229 = 'component_11229';
export function Component11229({ value = 11229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11229, 'data-value': derived.doubled }, children);
}
export default Component11229;
