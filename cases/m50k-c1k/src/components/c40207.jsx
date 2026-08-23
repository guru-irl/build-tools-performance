import React from 'react';
const LABEL_40207 = 'component_40207';
export function Component40207({ value = 40207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40207, 'data-value': derived.doubled }, children);
}
export default Component40207;
