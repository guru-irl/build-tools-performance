import React from 'react';
const LABEL_37887 = 'component_37887';
export function Component37887({ value = 37887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37887, 'data-value': derived.doubled }, children);
}
export default Component37887;
