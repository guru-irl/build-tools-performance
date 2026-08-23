import React from 'react';
const LABEL_5307 = 'component_5307';
export function Component5307({ value = 5307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5307, 'data-value': derived.doubled }, children);
}
export default Component5307;
