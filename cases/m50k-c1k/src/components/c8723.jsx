import React from 'react';
const LABEL_8723 = 'component_8723';
export function Component8723({ value = 8723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8723, 'data-value': derived.doubled }, children);
}
export default Component8723;
