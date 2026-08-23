import React from 'react';
const LABEL_8970 = 'component_8970';
export function Component8970({ value = 8970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8970, 'data-value': derived.doubled }, children);
}
export default Component8970;
