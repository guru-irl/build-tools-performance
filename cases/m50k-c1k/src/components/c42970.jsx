import React from 'react';
const LABEL_42970 = 'component_42970';
export function Component42970({ value = 42970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42970, 'data-value': derived.doubled }, children);
}
export default Component42970;
