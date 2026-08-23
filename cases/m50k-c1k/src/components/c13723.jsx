import React from 'react';
const LABEL_13723 = 'component_13723';
export function Component13723({ value = 13723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13723, 'data-value': derived.doubled }, children);
}
export default Component13723;
