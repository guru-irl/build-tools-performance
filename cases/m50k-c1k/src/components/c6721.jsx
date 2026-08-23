import React from 'react';
const LABEL_6721 = 'component_6721';
export function Component6721({ value = 6721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6721, 'data-value': derived.doubled }, children);
}
export default Component6721;
