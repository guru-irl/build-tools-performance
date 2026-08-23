import React from 'react';
const LABEL_34886 = 'component_34886';
export function Component34886({ value = 34886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34886, 'data-value': derived.doubled }, children);
}
export default Component34886;
