import React from 'react';
const LABEL_7843 = 'component_7843';
export function Component7843({ value = 7843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7843, 'data-value': derived.doubled }, children);
}
export default Component7843;
