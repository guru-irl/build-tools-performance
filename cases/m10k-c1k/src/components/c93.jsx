import React from 'react';
const LABEL_93 = 'component_93';
export function Component93({ value = 93, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_93, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_93, 'data-value': derived.doubled }, children);
}
export default Component93;
