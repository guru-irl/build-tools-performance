import React from 'react';
const LABEL_44843 = 'component_44843';
export function Component44843({ value = 44843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44843, 'data-value': derived.doubled }, children);
}
export default Component44843;
