import React from 'react';
const LABEL_35721 = 'component_35721';
export function Component35721({ value = 35721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35721, 'data-value': derived.doubled }, children);
}
export default Component35721;
