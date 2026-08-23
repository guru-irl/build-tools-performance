import React from 'react';
const LABEL_6207 = 'component_6207';
export function Component6207({ value = 6207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6207, 'data-value': derived.doubled }, children);
}
export default Component6207;
