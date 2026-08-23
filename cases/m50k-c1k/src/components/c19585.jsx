import React from 'react';
const LABEL_19585 = 'component_19585';
export function Component19585({ value = 19585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19585, 'data-value': derived.doubled }, children);
}
export default Component19585;
