import React from 'react';
const LABEL_45886 = 'component_45886';
export function Component45886({ value = 45886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45886, 'data-value': derived.doubled }, children);
}
export default Component45886;
