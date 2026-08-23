import React from 'react';
const LABEL_11886 = 'component_11886';
export function Component11886({ value = 11886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11886, 'data-value': derived.doubled }, children);
}
export default Component11886;
