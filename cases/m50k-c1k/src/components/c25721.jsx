import React from 'react';
const LABEL_25721 = 'component_25721';
export function Component25721({ value = 25721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25721, 'data-value': derived.doubled }, children);
}
export default Component25721;
