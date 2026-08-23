import React from 'react';
const LABEL_19429 = 'component_19429';
export function Component19429({ value = 19429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19429, 'data-value': derived.doubled }, children);
}
export default Component19429;
