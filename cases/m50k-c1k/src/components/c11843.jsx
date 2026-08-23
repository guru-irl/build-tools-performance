import React from 'react';
const LABEL_11843 = 'component_11843';
export function Component11843({ value = 11843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11843, 'data-value': derived.doubled }, children);
}
export default Component11843;
