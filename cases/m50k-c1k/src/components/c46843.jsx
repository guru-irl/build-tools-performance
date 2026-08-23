import React from 'react';
const LABEL_46843 = 'component_46843';
export function Component46843({ value = 46843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46843, 'data-value': derived.doubled }, children);
}
export default Component46843;
