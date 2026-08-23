import React from 'react';
const LABEL_24207 = 'component_24207';
export function Component24207({ value = 24207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24207, 'data-value': derived.doubled }, children);
}
export default Component24207;
