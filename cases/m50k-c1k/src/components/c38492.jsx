import React from 'react';
const LABEL_38492 = 'component_38492';
export function Component38492({ value = 38492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38492, 'data-value': derived.doubled }, children);
}
export default Component38492;
