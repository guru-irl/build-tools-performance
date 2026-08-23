import React from 'react';
const LABEL_19655 = 'component_19655';
export function Component19655({ value = 19655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19655, 'data-value': derived.doubled }, children);
}
export default Component19655;
