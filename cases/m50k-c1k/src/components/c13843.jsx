import React from 'react';
const LABEL_13843 = 'component_13843';
export function Component13843({ value = 13843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13843, 'data-value': derived.doubled }, children);
}
export default Component13843;
