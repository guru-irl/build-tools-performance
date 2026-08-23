import React from 'react';
const LABEL_37843 = 'component_37843';
export function Component37843({ value = 37843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37843, 'data-value': derived.doubled }, children);
}
export default Component37843;
