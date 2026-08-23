import React from 'react';
const LABEL_27105 = 'component_27105';
export function Component27105({ value = 27105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27105, 'data-value': derived.doubled }, children);
}
export default Component27105;
