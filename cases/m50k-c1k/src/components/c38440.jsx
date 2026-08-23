import React from 'react';
const LABEL_38440 = 'component_38440';
export function Component38440({ value = 38440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38440, 'data-value': derived.doubled }, children);
}
export default Component38440;
