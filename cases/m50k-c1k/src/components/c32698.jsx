import React from 'react';
const LABEL_32698 = 'component_32698';
export function Component32698({ value = 32698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32698, 'data-value': derived.doubled }, children);
}
export default Component32698;
