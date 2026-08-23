import React from 'react';
const LABEL_38721 = 'component_38721';
export function Component38721({ value = 38721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38721, 'data-value': derived.doubled }, children);
}
export default Component38721;
