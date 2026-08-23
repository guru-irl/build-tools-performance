import React from 'react';
const LABEL_7171 = 'component_7171';
export function Component7171({ value = 7171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7171, 'data-value': derived.doubled }, children);
}
export default Component7171;
