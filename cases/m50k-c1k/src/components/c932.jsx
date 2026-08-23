import React from 'react';
const LABEL_932 = 'component_932';
export function Component932({ value = 932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_932, 'data-value': derived.doubled }, children);
}
export default Component932;
