import React from 'react';
const LABEL_44349 = 'component_44349';
export function Component44349({ value = 44349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44349, 'data-value': derived.doubled }, children);
}
export default Component44349;
