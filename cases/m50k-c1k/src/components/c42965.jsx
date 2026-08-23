import React from 'react';
const LABEL_42965 = 'component_42965';
export function Component42965({ value = 42965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42965, 'data-value': derived.doubled }, children);
}
export default Component42965;
