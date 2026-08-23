import React from 'react';
const LABEL_27698 = 'component_27698';
export function Component27698({ value = 27698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27698, 'data-value': derived.doubled }, children);
}
export default Component27698;
