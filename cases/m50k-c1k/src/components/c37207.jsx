import React from 'react';
const LABEL_37207 = 'component_37207';
export function Component37207({ value = 37207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37207, 'data-value': derived.doubled }, children);
}
export default Component37207;
