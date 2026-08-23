import React from 'react';
const LABEL_44501 = 'component_44501';
export function Component44501({ value = 44501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44501, 'data-value': derived.doubled }, children);
}
export default Component44501;
