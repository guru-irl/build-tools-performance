import React from 'react';
const LABEL_35843 = 'component_35843';
export function Component35843({ value = 35843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35843, 'data-value': derived.doubled }, children);
}
export default Component35843;
