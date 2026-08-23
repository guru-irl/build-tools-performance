import React from 'react';
const LABEL_24721 = 'component_24721';
export function Component24721({ value = 24721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24721, 'data-value': derived.doubled }, children);
}
export default Component24721;
