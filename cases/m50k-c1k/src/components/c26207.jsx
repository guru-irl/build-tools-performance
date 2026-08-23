import React from 'react';
const LABEL_26207 = 'component_26207';
export function Component26207({ value = 26207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26207, 'data-value': derived.doubled }, children);
}
export default Component26207;
