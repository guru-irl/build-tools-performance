import React from 'react';
const LABEL_868 = 'component_868';
export function Component868({ value = 868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_868, 'data-value': derived.doubled }, children);
}
export default Component868;
