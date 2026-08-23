import React from 'react';
const LABEL_40843 = 'component_40843';
export function Component40843({ value = 40843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40843, 'data-value': derived.doubled }, children);
}
export default Component40843;
