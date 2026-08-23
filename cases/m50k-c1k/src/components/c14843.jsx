import React from 'react';
const LABEL_14843 = 'component_14843';
export function Component14843({ value = 14843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14843, 'data-value': derived.doubled }, children);
}
export default Component14843;
