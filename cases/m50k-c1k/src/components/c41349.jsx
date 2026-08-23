import React from 'react';
const LABEL_41349 = 'component_41349';
export function Component41349({ value = 41349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41349, 'data-value': derived.doubled }, children);
}
export default Component41349;
