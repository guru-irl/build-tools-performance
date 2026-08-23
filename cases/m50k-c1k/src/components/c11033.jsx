import React from 'react';
const LABEL_11033 = 'component_11033';
export function Component11033({ value = 11033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11033, 'data-value': derived.doubled }, children);
}
export default Component11033;
