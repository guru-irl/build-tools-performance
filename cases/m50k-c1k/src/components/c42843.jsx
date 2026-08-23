import React from 'react';
const LABEL_42843 = 'component_42843';
export function Component42843({ value = 42843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42843, 'data-value': derived.doubled }, children);
}
export default Component42843;
