import React from 'react';
const LABEL_42067 = 'component_42067';
export function Component42067({ value = 42067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42067, 'data-value': derived.doubled }, children);
}
export default Component42067;
