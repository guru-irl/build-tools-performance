import React from 'react';
const LABEL_89 = 'component_89';
export function Component89({ value = 89, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_89, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_89, 'data-value': derived.doubled }, children);
}
export default Component89;
