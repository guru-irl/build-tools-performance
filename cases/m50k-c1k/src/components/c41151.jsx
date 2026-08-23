import React from 'react';
const LABEL_41151 = 'component_41151';
export function Component41151({ value = 41151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41151, 'data-value': derived.doubled }, children);
}
export default Component41151;
