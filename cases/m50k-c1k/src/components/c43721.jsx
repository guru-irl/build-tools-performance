import React from 'react';
const LABEL_43721 = 'component_43721';
export function Component43721({ value = 43721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43721, 'data-value': derived.doubled }, children);
}
export default Component43721;
