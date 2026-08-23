import React from 'react';
const LABEL_31701 = 'component_31701';
export function Component31701({ value = 31701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31701, 'data-value': derived.doubled }, children);
}
export default Component31701;
