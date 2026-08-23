import React from 'react';
const LABEL_46265 = 'component_46265';
export function Component46265({ value = 46265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46265, 'data-value': derived.doubled }, children);
}
export default Component46265;
