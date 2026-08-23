import React from 'react';
const LABEL_13698 = 'component_13698';
export function Component13698({ value = 13698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13698, 'data-value': derived.doubled }, children);
}
export default Component13698;
