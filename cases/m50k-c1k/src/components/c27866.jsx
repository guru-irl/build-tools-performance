import React from 'react';
const LABEL_27866 = 'component_27866';
export function Component27866({ value = 27866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27866, 'data-value': derived.doubled }, children);
}
export default Component27866;
