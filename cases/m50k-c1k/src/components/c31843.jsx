import React from 'react';
const LABEL_31843 = 'component_31843';
export function Component31843({ value = 31843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31843, 'data-value': derived.doubled }, children);
}
export default Component31843;
