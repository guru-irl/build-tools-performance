import React from 'react';
const LABEL_38843 = 'component_38843';
export function Component38843({ value = 38843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38843, 'data-value': derived.doubled }, children);
}
export default Component38843;
