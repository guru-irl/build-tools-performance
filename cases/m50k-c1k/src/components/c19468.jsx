import React from 'react';
const LABEL_19468 = 'component_19468';
export function Component19468({ value = 19468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19468, 'data-value': derived.doubled }, children);
}
export default Component19468;
