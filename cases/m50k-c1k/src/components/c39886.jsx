import React from 'react';
const LABEL_39886 = 'component_39886';
export function Component39886({ value = 39886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39886, 'data-value': derived.doubled }, children);
}
export default Component39886;
