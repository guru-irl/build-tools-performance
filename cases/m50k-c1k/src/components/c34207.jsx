import React from 'react';
const LABEL_34207 = 'component_34207';
export function Component34207({ value = 34207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34207, 'data-value': derived.doubled }, children);
}
export default Component34207;
