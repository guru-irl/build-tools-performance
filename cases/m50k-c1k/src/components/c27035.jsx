import React from 'react';
const LABEL_27035 = 'component_27035';
export function Component27035({ value = 27035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27035, 'data-value': derived.doubled }, children);
}
export default Component27035;
