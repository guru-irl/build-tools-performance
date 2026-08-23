import React from 'react';
const LABEL_4408 = 'component_4408';
export function Component4408({ value = 4408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4408, 'data-value': derived.doubled }, children);
}
export default Component4408;
