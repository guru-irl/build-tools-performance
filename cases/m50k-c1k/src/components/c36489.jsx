import React from 'react';
const LABEL_36489 = 'component_36489';
export function Component36489({ value = 36489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36489, 'data-value': derived.doubled }, children);
}
export default Component36489;
