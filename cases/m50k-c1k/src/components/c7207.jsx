import React from 'react';
const LABEL_7207 = 'component_7207';
export function Component7207({ value = 7207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7207, 'data-value': derived.doubled }, children);
}
export default Component7207;
