import React from 'react';
const LABEL_18843 = 'component_18843';
export function Component18843({ value = 18843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18843, 'data-value': derived.doubled }, children);
}
export default Component18843;
