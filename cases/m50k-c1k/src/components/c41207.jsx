import React from 'react';
const LABEL_41207 = 'component_41207';
export function Component41207({ value = 41207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41207, 'data-value': derived.doubled }, children);
}
export default Component41207;
