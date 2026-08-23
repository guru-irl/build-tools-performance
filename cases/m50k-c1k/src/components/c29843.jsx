import React from 'react';
const LABEL_29843 = 'component_29843';
export function Component29843({ value = 29843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29843, 'data-value': derived.doubled }, children);
}
export default Component29843;
