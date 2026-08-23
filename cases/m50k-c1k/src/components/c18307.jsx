import React from 'react';
const LABEL_18307 = 'component_18307';
export function Component18307({ value = 18307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18307, 'data-value': derived.doubled }, children);
}
export default Component18307;
