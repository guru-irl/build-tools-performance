import React from 'react';
const LABEL_27584 = 'component_27584';
export function Component27584({ value = 27584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27584, 'data-value': derived.doubled }, children);
}
export default Component27584;
