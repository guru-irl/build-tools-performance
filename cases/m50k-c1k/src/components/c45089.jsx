import React from 'react';
const LABEL_45089 = 'component_45089';
export function Component45089({ value = 45089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45089, 'data-value': derived.doubled }, children);
}
export default Component45089;
