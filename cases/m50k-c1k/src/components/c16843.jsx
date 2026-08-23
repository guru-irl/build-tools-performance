import React from 'react';
const LABEL_16843 = 'component_16843';
export function Component16843({ value = 16843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16843, 'data-value': derived.doubled }, children);
}
export default Component16843;
