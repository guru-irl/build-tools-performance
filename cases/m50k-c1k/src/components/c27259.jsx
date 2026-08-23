import React from 'react';
const LABEL_27259 = 'component_27259';
export function Component27259({ value = 27259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27259, 'data-value': derived.doubled }, children);
}
export default Component27259;
