import React from 'react';
const LABEL_46207 = 'component_46207';
export function Component46207({ value = 46207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46207, 'data-value': derived.doubled }, children);
}
export default Component46207;
