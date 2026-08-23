import React from 'react';
const LABEL_41927 = 'component_41927';
export function Component41927({ value = 41927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41927, 'data-value': derived.doubled }, children);
}
export default Component41927;
