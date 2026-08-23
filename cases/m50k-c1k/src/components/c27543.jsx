import React from 'react';
const LABEL_27543 = 'component_27543';
export function Component27543({ value = 27543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27543, 'data-value': derived.doubled }, children);
}
export default Component27543;
