import React from 'react';
const LABEL_25886 = 'component_25886';
export function Component25886({ value = 25886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25886, 'data-value': derived.doubled }, children);
}
export default Component25886;
