import React from 'react';
const LABEL_25045 = 'component_25045';
export function Component25045({ value = 25045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25045, 'data-value': derived.doubled }, children);
}
export default Component25045;
