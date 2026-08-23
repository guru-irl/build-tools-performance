import React from 'react';
const LABEL_18721 = 'component_18721';
export function Component18721({ value = 18721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18721, 'data-value': derived.doubled }, children);
}
export default Component18721;
