import React from 'react';
const LABEL_29698 = 'component_29698';
export function Component29698({ value = 29698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29698, 'data-value': derived.doubled }, children);
}
export default Component29698;
