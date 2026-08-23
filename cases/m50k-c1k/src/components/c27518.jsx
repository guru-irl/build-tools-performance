import React from 'react';
const LABEL_27518 = 'component_27518';
export function Component27518({ value = 27518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27518, 'data-value': derived.doubled }, children);
}
export default Component27518;
