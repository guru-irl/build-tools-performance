import React from 'react';
const LABEL_29207 = 'component_29207';
export function Component29207({ value = 29207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29207, 'data-value': derived.doubled }, children);
}
export default Component29207;
