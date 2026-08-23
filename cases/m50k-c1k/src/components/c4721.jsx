import React from 'react';
const LABEL_4721 = 'component_4721';
export function Component4721({ value = 4721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4721, 'data-value': derived.doubled }, children);
}
export default Component4721;
