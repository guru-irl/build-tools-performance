import React from 'react';
const LABEL_41067 = 'component_41067';
export function Component41067({ value = 41067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41067, 'data-value': derived.doubled }, children);
}
export default Component41067;
