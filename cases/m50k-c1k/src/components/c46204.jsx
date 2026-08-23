import React from 'react';
const LABEL_46204 = 'component_46204';
export function Component46204({ value = 46204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46204, 'data-value': derived.doubled }, children);
}
export default Component46204;
