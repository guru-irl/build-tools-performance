import React from 'react';
const LABEL_843 = 'component_843';
export function Component843({ value = 843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_843, 'data-value': derived.doubled }, children);
}
export default Component843;
