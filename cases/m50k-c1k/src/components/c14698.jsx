import React from 'react';
const LABEL_14698 = 'component_14698';
export function Component14698({ value = 14698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14698, 'data-value': derived.doubled }, children);
}
export default Component14698;
