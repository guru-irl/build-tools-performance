import React from 'react';
const LABEL_45179 = 'component_45179';
export function Component45179({ value = 45179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45179, 'data-value': derived.doubled }, children);
}
export default Component45179;
