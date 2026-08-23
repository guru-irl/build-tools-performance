import React from 'react';
const LABEL_32723 = 'component_32723';
export function Component32723({ value = 32723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32723, 'data-value': derived.doubled }, children);
}
export default Component32723;
