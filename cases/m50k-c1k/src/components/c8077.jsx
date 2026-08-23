import React from 'react';
const LABEL_8077 = 'component_8077';
export function Component8077({ value = 8077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8077, 'data-value': derived.doubled }, children);
}
export default Component8077;
