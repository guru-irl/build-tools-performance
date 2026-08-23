import React from 'react';
const LABEL_36307 = 'component_36307';
export function Component36307({ value = 36307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36307, 'data-value': derived.doubled }, children);
}
export default Component36307;
