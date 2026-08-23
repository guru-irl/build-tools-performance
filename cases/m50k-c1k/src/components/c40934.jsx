import React from 'react';
const LABEL_40934 = 'component_40934';
export function Component40934({ value = 40934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40934, 'data-value': derived.doubled }, children);
}
export default Component40934;
