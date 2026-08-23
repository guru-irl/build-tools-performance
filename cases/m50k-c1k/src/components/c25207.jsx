import React from 'react';
const LABEL_25207 = 'component_25207';
export function Component25207({ value = 25207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25207, 'data-value': derived.doubled }, children);
}
export default Component25207;
