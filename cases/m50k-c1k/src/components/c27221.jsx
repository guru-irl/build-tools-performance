import React from 'react';
const LABEL_27221 = 'component_27221';
export function Component27221({ value = 27221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27221, 'data-value': derived.doubled }, children);
}
export default Component27221;
