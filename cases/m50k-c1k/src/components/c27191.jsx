import React from 'react';
const LABEL_27191 = 'component_27191';
export function Component27191({ value = 27191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27191, 'data-value': derived.doubled }, children);
}
export default Component27191;
