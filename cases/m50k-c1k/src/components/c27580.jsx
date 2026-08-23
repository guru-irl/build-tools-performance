import React from 'react';
const LABEL_27580 = 'component_27580';
export function Component27580({ value = 27580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27580, 'data-value': derived.doubled }, children);
}
export default Component27580;
