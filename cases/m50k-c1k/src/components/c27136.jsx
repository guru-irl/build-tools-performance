import React from 'react';
const LABEL_27136 = 'component_27136';
export function Component27136({ value = 27136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27136, 'data-value': derived.doubled }, children);
}
export default Component27136;
