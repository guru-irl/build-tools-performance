import React from 'react';
const LABEL_4581 = 'component_4581';
export function Component4581({ value = 4581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4581, 'data-value': derived.doubled }, children);
}
export default Component4581;
