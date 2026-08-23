import React from 'react';
const LABEL_27447 = 'component_27447';
export function Component27447({ value = 27447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27447, 'data-value': derived.doubled }, children);
}
export default Component27447;
