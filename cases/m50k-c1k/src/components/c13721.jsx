import React from 'react';
const LABEL_13721 = 'component_13721';
export function Component13721({ value = 13721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13721, 'data-value': derived.doubled }, children);
}
export default Component13721;
