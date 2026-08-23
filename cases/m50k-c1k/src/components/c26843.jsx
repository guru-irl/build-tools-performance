import React from 'react';
const LABEL_26843 = 'component_26843';
export function Component26843({ value = 26843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26843, 'data-value': derived.doubled }, children);
}
export default Component26843;
