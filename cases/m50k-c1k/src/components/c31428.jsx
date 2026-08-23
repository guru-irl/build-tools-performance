import React from 'react';
const LABEL_31428 = 'component_31428';
export function Component31428({ value = 31428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31428, 'data-value': derived.doubled }, children);
}
export default Component31428;
