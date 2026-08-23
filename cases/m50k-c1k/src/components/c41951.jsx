import React from 'react';
const LABEL_41951 = 'component_41951';
export function Component41951({ value = 41951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41951, 'data-value': derived.doubled }, children);
}
export default Component41951;
