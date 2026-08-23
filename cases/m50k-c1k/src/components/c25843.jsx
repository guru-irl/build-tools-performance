import React from 'react';
const LABEL_25843 = 'component_25843';
export function Component25843({ value = 25843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25843, 'data-value': derived.doubled }, children);
}
export default Component25843;
