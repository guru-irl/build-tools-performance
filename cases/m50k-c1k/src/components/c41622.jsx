import React from 'react';
const LABEL_41622 = 'component_41622';
export function Component41622({ value = 41622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41622, 'data-value': derived.doubled }, children);
}
export default Component41622;
