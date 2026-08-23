import React from 'react';
const LABEL_4842 = 'component_4842';
export function Component4842({ value = 4842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4842, 'data-value': derived.doubled }, children);
}
export default Component4842;
