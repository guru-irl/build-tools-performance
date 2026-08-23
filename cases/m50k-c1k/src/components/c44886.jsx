import React from 'react';
const LABEL_44886 = 'component_44886';
export function Component44886({ value = 44886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44886, 'data-value': derived.doubled }, children);
}
export default Component44886;
