import React from 'react';
const LABEL_46033 = 'component_46033';
export function Component46033({ value = 46033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46033, 'data-value': derived.doubled }, children);
}
export default Component46033;
