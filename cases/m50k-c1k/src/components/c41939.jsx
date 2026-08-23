import React from 'react';
const LABEL_41939 = 'component_41939';
export function Component41939({ value = 41939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41939, 'data-value': derived.doubled }, children);
}
export default Component41939;
