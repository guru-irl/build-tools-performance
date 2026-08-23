import React from 'react';
const LABEL_27770 = 'component_27770';
export function Component27770({ value = 27770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27770, 'data-value': derived.doubled }, children);
}
export default Component27770;
