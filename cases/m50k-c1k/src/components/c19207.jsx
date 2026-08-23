import React from 'react';
const LABEL_19207 = 'component_19207';
export function Component19207({ value = 19207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19207, 'data-value': derived.doubled }, children);
}
export default Component19207;
