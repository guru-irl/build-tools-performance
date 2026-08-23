import React from 'react';
const LABEL_27392 = 'component_27392';
export function Component27392({ value = 27392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27392, 'data-value': derived.doubled }, children);
}
export default Component27392;
