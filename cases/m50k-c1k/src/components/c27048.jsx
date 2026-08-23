import React from 'react';
const LABEL_27048 = 'component_27048';
export function Component27048({ value = 27048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27048, 'data-value': derived.doubled }, children);
}
export default Component27048;
