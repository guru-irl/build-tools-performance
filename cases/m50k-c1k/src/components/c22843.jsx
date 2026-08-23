import React from 'react';
const LABEL_22843 = 'component_22843';
export function Component22843({ value = 22843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22843, 'data-value': derived.doubled }, children);
}
export default Component22843;
