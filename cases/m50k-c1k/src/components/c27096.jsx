import React from 'react';
const LABEL_27096 = 'component_27096';
export function Component27096({ value = 27096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27096, 'data-value': derived.doubled }, children);
}
export default Component27096;
