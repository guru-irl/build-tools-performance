import React from 'react';
const LABEL_26721 = 'component_26721';
export function Component26721({ value = 26721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26721, 'data-value': derived.doubled }, children);
}
export default Component26721;
