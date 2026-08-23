import React from 'react';
const LABEL_41934 = 'component_41934';
export function Component41934({ value = 41934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41934, 'data-value': derived.doubled }, children);
}
export default Component41934;
