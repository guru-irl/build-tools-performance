import React from 'react';
const LABEL_4843 = 'component_4843';
export function Component4843({ value = 4843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4843, 'data-value': derived.doubled }, children);
}
export default Component4843;
