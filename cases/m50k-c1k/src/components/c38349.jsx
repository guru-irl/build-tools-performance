import React from 'react';
const LABEL_38349 = 'component_38349';
export function Component38349({ value = 38349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38349, 'data-value': derived.doubled }, children);
}
export default Component38349;
