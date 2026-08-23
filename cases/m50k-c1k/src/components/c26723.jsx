import React from 'react';
const LABEL_26723 = 'component_26723';
export function Component26723({ value = 26723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26723, 'data-value': derived.doubled }, children);
}
export default Component26723;
