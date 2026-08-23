import React from 'react';
const LABEL_19609 = 'component_19609';
export function Component19609({ value = 19609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19609, 'data-value': derived.doubled }, children);
}
export default Component19609;
