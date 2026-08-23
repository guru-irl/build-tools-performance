import React from 'react';
const LABEL_16033 = 'component_16033';
export function Component16033({ value = 16033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16033, 'data-value': derived.doubled }, children);
}
export default Component16033;
